import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Navbar from "../components/Navbar";
import CitySelected from "../components/CitySelected";
import Input from "../components/Input";
import { CITY_ATOM } from "../state/atom/city";
import { TEMP_UNIT_ATOM, SAVED_CITIES_ATOM } from "../state/atom/settings";
import { fetchCurrentWeather, getIconUrl } from "../services/weatherApi";
import { formatTemp } from "../utils/weatherUtils";
import { IoClose } from "react-icons/io5";

export default function Cities() {
  const [selectedCity, setSelectedCity] = useRecoilState(CITY_ATOM);
  const tempUnit = useRecoilValue(TEMP_UNIT_ATOM);
  const [savedCities, setSavedCities] = useRecoilState(SAVED_CITIES_ATOM);

  const [citiesWeatherData, setCitiesWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch current weather for all saved cities
  useEffect(() => {
    let isMounted = true;
    const fetchAllCitiesWeather = async () => {
      setLoading(true);
      try {
        const promises = savedCities.map(async (city) => {
          try {
            const data = await fetchCurrentWeather(city, tempUnit);
            return { city, data, valid: true };
          } catch (err) {
            console.error("Failed to fetch weather for city:", city, err);
            return { city, err: err.message, valid: false };
          }
        });
        const results = await Promise.all(promises);
        if (isMounted) {
          setCitiesWeatherData(results.filter((r) => r.valid));
        }
      } catch (err) {
        console.error("Failed to fetch weather for saved cities:", err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchAllCitiesWeather();

    return () => {
      isMounted = false;
    };
  }, [savedCities, tempUnit]);

  // Handle removing a city from saved list
  const handleRemoveCity = (e, cityToRemove) => {
    e.stopPropagation(); // prevent selecting the city card
    const updated = savedCities.filter((c) => c.toLowerCase() !== cityToRemove.toLowerCase());
    setSavedCities(updated);
    localStorage.setItem("savedCities", JSON.stringify(updated));

    // If removed city was currently selected, select another one if available
    if (selectedCity.toLowerCase() === cityToRemove.toLowerCase()) {
      setSelectedCity(updated.length > 0 ? updated[0] : "");
    }
  };

  // Add currently searched city to saved list
  const handleSaveCurrentCity = () => {
    if (!selectedCity) return;
    const normalizedSelected = selectedCity.trim();
    if (!normalizedSelected) return;

    const exists = savedCities.some(
      (c) => c.toLowerCase() === normalizedSelected.toLowerCase()
    );
    if (!exists) {
      const updated = [...savedCities, normalizedSelected];
      setSavedCities(updated);
      localStorage.setItem("savedCities", JSON.stringify(updated));
    }
  };

  // Format local time of city using its timezone offset
  const getCityLocalTime = (timezoneOffset) => {
    const utcTime = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
    const cityTime = new Date(utcTime + timezoneOffset * 1000);
    return cityTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const isCurrentCitySaved = savedCities.some(
    (c) => c.toLowerCase() === selectedCity.toLowerCase()
  );

  return (
    <div className="bg-[#0b131e] min-h-screen text-slate-100 pb-24 md:pb-8">
      <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6 max-w-7xl mx-auto w-full">
        <Navbar />

        <main className="flex-1 w-full mt-4 md:mt-0">
          <Input />

          {/* Action panel to save currently searched city */}
          {selectedCity && !isCurrentCitySaved && (
            <div className="bg-[#202b3b]/60 border border-sky-500/20 rounded-3xl p-4 mb-4 flex justify-between items-center text-white font-mono text-xs md:text-sm">
              <span>
                City <strong className="text-sky-400 capitalize">&quot;{selectedCity}&quot;</strong> is not saved.
              </span>
              <button
                onClick={handleSaveCurrentCity}
                className="bg-[#0095ff] hover:bg-sky-500 text-xs text-white font-bold px-4 py-2 rounded-xl transition-all"
              >
                Save City
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* List of saved cities */}
            <div className="lg:col-span-2 space-y-4">
              {loading && citiesWeatherData.length === 0 ? (
                <div className="flex justify-center items-center mt-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-400"></div>
                  <span className="text-white ml-3 font-mono">Loading saved cities...</span>
                </div>
              ) : (
                <div className="space-y-4 max-h-[75vh] overflow-y-auto pr-2 scrollbar-thin">
                  {citiesWeatherData.map(({ city, data }, index) => {
                    const tempFormatted = formatTemp(data.main.temp, tempUnit);
                    const iconUrl = getIconUrl(data.weather[0].icon);
                    const localTimeStr = getCityLocalTime(data.timezone);
                    const isSelected = selectedCity.toLowerCase() === city.toLowerCase();

                    return (
                      <div
                        key={index}
                        onClick={() => setSelectedCity(city)}
                        className={`bg-[#202b3b]/60 h-28 rounded-2xl cursor-pointer transition-all border ${
                          isSelected
                            ? "border-sky-400 shadow-md shadow-sky-500/10 bg-[#202b3b]/80"
                            : "border-transparent hover:border-sky-300"
                        } flex items-center justify-between px-6 relative group`}
                      >
                        {/* Delete button */}
                        <button
                          onClick={(e) => handleRemoveCity(e, city)}
                          className="absolute top-3 right-3 text-slate-400 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-[#0b131e]/50 rounded-full"
                          title="Remove City"
                        >
                          <IoClose size={18} />
                        </button>

                        <div className="flex items-center gap-4">
                          <img
                            src={iconUrl}
                            alt={data.weather[0].description}
                            className="w-16 h-16 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                          />
                          <div>
                            <div className="text-xl md:text-2xl font-bold text-white capitalize">
                              {data.name}
                            </div>
                            <div className="text-slate-400 font-mono text-xs mt-0.5">
                              Local Time: {localTimeStr}
                            </div>
                          </div>
                        </div>

                        <div className="text-2xl md:text-3xl font-light font-mono text-white">
                          {tempFormatted}
                        </div>
                      </div>
                    );
                  })}

                  {citiesWeatherData.length === 0 && !loading && (
                    <div className="text-slate-400 text-center font-mono mt-20">
                      No saved cities. Search and save cities using the input above!
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Selected city detail panel */}
            <div className="w-full">
              <CitySelected />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
