import { useRecoilState, useRecoilValue } from "recoil";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import {
  TEMP_UNIT_ATOM,
  WIND_UNIT_ATOM,
  TIME_FORMAT_ATOM,
  LOCATION_ENABLED_ATOM,
} from "../state/atom/settings";
import { WEATHER_DATA_ATOM } from "../state/atom/weather";
import { formatTime } from "../utils/weatherUtils";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { LuActivity, LuInfo } from "react-icons/lu";

export default function Settings() {
  const [tempUnit, setTempUnit] = useRecoilState(TEMP_UNIT_ATOM);
  const [windUnit, setWindUnit] = useRecoilState(WIND_UNIT_ATOM);
  const [timeFormat, setTimeFormat] = useRecoilState(TIME_FORMAT_ATOM);
  const [locationEnabled, setLocationEnabled] = useRecoilState(LOCATION_ENABLED_ATOM);
  const weatherData = useRecoilValue(WEATHER_DATA_ATOM);

  const handleTempUnitChange = (unit) => {
    setTempUnit(unit);
    localStorage.setItem("tempUnit", JSON.stringify(unit));
  };

  const handleWindUnitChange = (unit) => {
    setWindUnit(unit);
    localStorage.setItem("windUnit", JSON.stringify(unit));
  };

  const handleTimeFormatChange = (format) => {
    setTimeFormat(format);
    localStorage.setItem("timeFormat", JSON.stringify(format));
  };

  const handleLocationToggle = () => {
    const nextVal = !locationEnabled;
    setLocationEnabled(nextVal);
    localStorage.setItem("locationEnabled", JSON.stringify(nextVal));

    if (nextVal && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          console.log(pos.coords.latitude, pos.coords.longitude);
        },
        (err) => console.warn(err)
      );
    }
  };

  // Calculate day length in hours and minutes
  const getDayLength = (sunrise, sunset) => {
    if (!sunrise || !sunset) return "0h 0m";
    const diffMs = (sunset - sunrise) * 1000;
    const hours = Math.floor(diffMs / 3600000);
    const minutes = Math.floor((diffMs % 3600000) / 60000);
    return `${hours}h ${minutes}m`;
  };

  // Generate recommendation based on weather condition
  const getWeatherRecommendation = (weather) => {
    if (!weather) return "Select city to view weather tips.";
    const main = weather.weather[0].main.toLowerCase();
    const temp = weather.main.temp;
    
    if (main.includes("rain") || main.includes("drizzle")) {
      return "Precipitation expected. Carrying an umbrella is highly recommended.";
    }
    if (main.includes("snow")) {
      return "Freezing snow conditions. Dress in warm layers and drive safe.";
    }
    if (temp > 30) {
      return "High temperatures today. Stay hydrated and avoid long exposure.";
    }
    if (temp < 10) {
      return "Chilly weather outside. Grab a warm jacket before stepping out.";
    }
    if (weather.wind.speed > 10) {
      return "Strong winds observed. Secure loose outdoor items.";
    }
    return "Pleasant conditions today. Ideal day for outdoor activities!";
  };

  return (
    <div className="bg-[#0b131e] min-h-screen text-slate-100 pb-24 md:pb-8">
      <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6 max-w-7xl mx-auto w-full">
        <Navbar />

        <main className="flex-1 w-full mt-4 md:mt-0">
          <Input />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            
            {/* Units & Settings Options */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Units Panel */}
              <div className="bg-[#202b3b]/60 border border-slate-700/30 rounded-3xl p-6 shadow-lg">
                <h2 className="text-xl font-bold text-white mb-4">Units</h2>
                
                <div className="space-y-4">
                  {/* Temperature */}
                  <div>
                    <p className="text-slate-400 font-mono text-xs uppercase tracking-wider mb-2">Temperature</p>
                    <div className="bg-[#0b131e] rounded-2xl text-white h-11 flex justify-between items-center p-1 font-bold">
                      <button
                        onClick={() => handleTempUnitChange("metric")}
                        className={`flex-1 text-center py-1.5 rounded-xl cursor-pointer transition-all text-sm ${
                          tempUnit === "metric" ? "bg-[#202b3b] text-white" : "text-slate-400"
                        }`}
                      >
                        Celsius
                      </button>
                      <button
                        onClick={() => handleTempUnitChange("imperial")}
                        className={`flex-1 text-center py-1.5 rounded-xl cursor-pointer transition-all text-sm ${
                          tempUnit === "imperial" ? "bg-[#202b3b] text-white" : "text-slate-400"
                        }`}
                      >
                        Fahrenheit
                      </button>
                    </div>
                  </div>

                  {/* Wind Speed */}
                  <div>
                    <p className="text-slate-400 font-mono text-xs uppercase tracking-wider mb-2">Wind Speed</p>
                    <div className="bg-[#0b131e] rounded-2xl text-white h-11 flex justify-between items-center p-1 font-bold">
                      <button
                        onClick={() => handleWindUnitChange("kmh")}
                        className={`flex-1 text-center py-1.5 rounded-xl cursor-pointer transition-all text-sm ${
                          windUnit === "kmh" ? "bg-[#202b3b] text-white" : "text-slate-400"
                        }`}
                      >
                        Km/hr
                      </button>
                      <button
                        onClick={() => handleWindUnitChange("ms")}
                        className={`flex-1 text-center py-1.5 rounded-xl cursor-pointer transition-all text-sm ${
                          windUnit === "ms" ? "bg-[#202b3b] text-white" : "text-slate-400"
                        }`}
                      >
                        m/s
                      </button>
                      <button
                        onClick={() => handleWindUnitChange("knots")}
                        className={`flex-1 text-center py-1.5 rounded-xl cursor-pointer transition-all text-sm ${
                          windUnit === "knots" ? "bg-[#202b3b] text-white" : "text-slate-400"
                        }`}
                      >
                        Knots
                      </button>
                    </div>
                  </div>

                  {/* Pressure (Static Mock) */}
                  <div>
                    <p className="text-slate-400 font-mono text-xs uppercase tracking-wider mb-2">Pressure</p>
                    <div className="bg-[#0b131e] rounded-2xl text-white h-11 flex justify-between items-center p-1 font-bold">
                      <div className="flex-1 bg-[#202b3b] text-center rounded-xl py-1.5 text-white text-sm">hPa</div>
                      <div className="flex-1 text-center text-slate-400 text-sm">Inches</div>
                      <div className="flex-1 text-center text-slate-400 text-sm">kPa</div>
                      <div className="flex-1 text-center text-slate-400 text-sm">mm</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* General Options Panel */}
              <div className="bg-[#202b3b]/60 border border-slate-700/30 rounded-3xl p-6 shadow-lg space-y-4">
                <h2 className="text-xl font-bold text-white mb-2">General</h2>

                <div className="flex justify-between items-center py-2">
                  <div>
                    <p className="text-base text-white">12-hour Format</p>
                    <p className="text-xs text-slate-400 font-mono">Use AM/PM notation</p>
                  </div>
                  <div
                    onClick={() => handleTimeFormatChange(timeFormat === "12h" ? "24h" : "12h")}
                    className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
                      timeFormat === "12h" ? "bg-blue-500" : "bg-gray-600"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                        timeFormat === "12h" ? "translate-x-6" : "translate-x-0"
                      }`}
                    />
                  </div>
                </div>

                <div className="border-b border-slate-700/30" />

                <div className="flex justify-between items-center py-2">
                  <div>
                    <p className="text-base text-white">Location Permissions</p>
                    <p className="text-xs text-slate-400 font-mono">Enable coordinates search</p>
                  </div>
                  <div
                    onClick={handleLocationToggle}
                    className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
                      locationEnabled ? "bg-blue-500" : "bg-gray-600"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                        locationEnabled ? "translate-x-6" : "translate-x-0"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Pricing & Ad Panels Replaced with Useful Weather Info */}
            <div className="space-y-6">
              {/* Sun & Moon Cycles Card */}
              <div className="bg-[#202b3b]/60 border border-slate-700/30 rounded-3xl p-6 shadow-lg space-y-4">
                <p className="text-xl font-bold text-white pb-3 border-b border-slate-700/30 flex items-center gap-2">
                  <FiSunrise className="text-amber-400" /> Sun Cycles
                </p>
                {weatherData ? (
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex justify-between items-center bg-[#0b131e]/40 p-3 rounded-xl">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <FiSunrise /> Sunrise
                      </span>
                      <span className="text-white font-bold">
                        {formatTime(weatherData.sys.sunrise, timeFormat === "12h", weatherData.timezone)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-[#0b131e]/40 p-3 rounded-xl">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <FiSunset /> Sunset
                      </span>
                      <span className="text-white font-bold">
                        {formatTime(weatherData.sys.sunset, timeFormat === "12h", weatherData.timezone)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-[#0b131e]/40 p-3 rounded-xl">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <LuActivity /> Daylight
                      </span>
                      <span className="text-white font-bold">
                        {getDayLength(weatherData.sys.sunrise, weatherData.sys.sunset)}
                      </span>
                    </div>
                  </div>
                ) : (
                  <p className="text-slate-400 text-sm font-mono text-center py-6">
                    No city loaded. Go to Weather page and select a city.
                  </p>
                )}
              </div>
              
              {/* Weather Recommendation Tips */}
              <div className="bg-[#202b3b]/60 border border-slate-700/30 rounded-3xl p-6 shadow-lg space-y-3">
                <p className="font-bold text-white text-xl pb-3 border-b border-slate-700/30 flex items-center gap-2">
                  <LuInfo className="text-sky-400" /> Weather Insights
                </p>
                <div className="bg-[#0b131e]/40 p-4 rounded-xl">
                  <p className="text-slate-300 text-sm leading-relaxed font-mono">
                    {getWeatherRecommendation(weatherData)}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
