import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import { CITY_ATOM } from "../state/atom/city";
import { TEMP_UNIT_ATOM } from "../state/atom/settings";
import { fetchCurrentWeather } from "../services/weatherApi";
import { formatTemp } from "../utils/weatherUtils";

export default function Maps() {
  const city = useRecoilValue(CITY_ATOM);
  const tempUnit = useRecoilValue(TEMP_UNIT_ATOM);
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const weatherLayerRef = useRef(null);

  const [coords, setCoords] = useState({ lat: 51.505, lon: -0.09 }); // Default London
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [currentLayer, setCurrentLayer] = useState("temp_new"); // 'none', 'temp_new', 'clouds_new', 'precipitation_new', 'wind_new'
  const [mapStyle, setMapStyle] = useState("dark"); // 'dark' or 'street'

  // Fetch coordinates and weather for selected city
  useEffect(() => {
    if (!city) return;
    let isMounted = true;
    const getCoords = async () => {
      try {
        const data = await fetchCurrentWeather(city, tempUnit);
        if (isMounted && data.coord) {
          setCoords({ lat: data.coord.lat, lon: data.coord.lon });
          setWeatherInfo(data);
        }
      } catch (err) {
        console.warn("Map coordinates fetch failed", err);
      }
    };
    getCoords();
    return () => {
      isMounted = false;
    };
  }, [city, tempUnit]);

  // Initialize and update Leaflet map
  useEffect(() => {
    if (!window.L || !mapContainerRef.current) return;

    // Create map if it doesn't exist
    if (!mapRef.current) {
      mapRef.current = window.L.map(mapContainerRef.current, {
        center: [coords.lat, coords.lon],
        zoom: 10,
        zoomControl: true,
      });
    }

    const map = mapRef.current;

    // Set view to coordinates
    map.setView([coords.lat, coords.lon], map.getZoom());

    // Remove existing tile layer if style changes
    map.eachLayer((layer) => {
      if (layer instanceof window.L.TileLayer && layer !== weatherLayerRef.current) {
        map.removeLayer(layer);
      }
    });

    // Add Base map tile layer
    const baseTileUrl =
      mapStyle === "dark"
        ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

    const attribution =
      mapStyle === "dark"
        ? '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

    window.L.tileLayer(baseTileUrl, { attribution }).addTo(map);

    // Add / Update Marker with popup info
    if (markerRef.current) {
      map.removeLayer(markerRef.current);
    }

    if (weatherInfo) {
      const tempStr = formatTemp(weatherInfo.main.temp, tempUnit);
      const desc = weatherInfo.weather[0].description;
      const humidity = weatherInfo.main.humidity;
      const windSpeed = weatherInfo.wind.speed;

      const popupContent = `
        <div style="color: #1e293b; font-family: sans-serif; font-size: 14px; line-height: 1.4;">
          <h3 style="margin: 0 0 5px 0; font-size: 16px; font-weight: bold; capitalize;">${weatherInfo.name}</h3>
          <p style="margin: 0; font-weight: 600; color: #0f172a;">Temp: ${tempStr}</p>
          <p style="margin: 2px 0 0 0; text-transform: capitalize; color: #475569;">${desc}</p>
          <p style="margin: 2px 0 0 0; color: #64748b;">Humidity: ${humidity}% | Wind: ${windSpeed} m/s</p>
        </div>
      `;

      markerRef.current = window.L.marker([coords.lat, coords.lon])
        .addTo(map)
        .bindPopup(popupContent)
        .openPopup();
    } else {
      markerRef.current = window.L.marker([coords.lat, coords.lon]).addTo(map);
    }

    // Refresh weather layers
    if (weatherLayerRef.current) {
      map.removeLayer(weatherLayerRef.current);
      weatherLayerRef.current = null;
    }

    if (currentLayer !== "none") {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const weatherTileUrl = `https://tile.openweathermap.org/map/${currentLayer}/{z}/{x}/{y}.png?appid=${apiKey}`;
      weatherLayerRef.current = window.L.tileLayer(weatherTileUrl, {
        opacity: 0.7,
        attribution: '&copy; <a href="https://openweathermap.org">OpenWeatherMap</a>',
      }).addTo(map);
    }
  }, [coords, weatherInfo, mapStyle, currentLayer, tempUnit]);

  // Clean up map on unmount
  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="bg-[#0b131e] min-h-screen text-slate-100 pb-24 md:pb-8">
      <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6 max-w-7xl mx-auto w-full">
        <Navbar />

        <main className="flex-1 w-full mt-4 md:mt-0">
          <Input />

          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mt-6 mb-4">
            <h2 className="text-xl md:text-2xl text-white font-bold font-mono capitalize">
              Weather Map: {city || "Default"}
            </h2>

            {/* Controls */}
            <div className="flex flex-wrap gap-3">
              {/* Map Style */}
              <div className="flex bg-[#202b3b]/60 border border-slate-700/30 rounded-xl p-1 text-xs font-bold text-white shadow">
                <button
                  onClick={() => setMapStyle("dark")}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    mapStyle === "dark" ? "bg-[#0b131e] text-sky-400" : "text-slate-400"
                  }`}
                >
                  Dark
                </button>
                <button
                  onClick={() => setMapStyle("street")}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    mapStyle === "street" ? "bg-[#0b131e] text-sky-400" : "text-slate-400"
                  }`}
                >
                  Street
                </button>
              </div>

              {/* Weather Overlays */}
              <select
                value={currentLayer}
                onChange={(e) => setCurrentLayer(e.target.value)}
                className="bg-[#202b3b]/60 border border-slate-700/30 text-white text-xs font-bold font-mono px-3 py-1.5 rounded-xl outline-none cursor-pointer hover:border-slate-600 transition-all shadow"
              >
                <option value="none">No Overlay</option>
                <option value="temp_new">Temperature Layer</option>
                <option value="clouds_new">Clouds Layer</option>
                <option value="precipitation_new">Precipitation Layer</option>
                <option value="wind_new">Wind Layer</option>
                <option value="pressure_new">Pressure Layer</option>
              </select>
            </div>
          </div>

          {/* Map Container */}
          <div
            ref={mapContainerRef}
            className="w-full rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl relative z-10"
            style={{ height: "60vh", minHeight: "400px" }}
          ></div>
        </main>
      </div>
    </div>
  );
}
