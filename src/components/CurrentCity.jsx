import { useRecoilValue } from "recoil";
import { WEATHER_DATA_ATOM, FORECAST_DATA_ATOM } from "../state/atom/weather";
import { TEMP_UNIT_ATOM } from "../state/atom/settings";
import { formatTemp } from "../utils/weatherUtils";
import { getIconUrl } from "../services/weatherApi";
import { rainChance } from "../utils/weatherUtils";

export default function CurrentCity() {
  const weatherData = useRecoilValue(WEATHER_DATA_ATOM);
  const forecastData = useRecoilValue(FORECAST_DATA_ATOM);
  const tempUnit = useRecoilValue(TEMP_UNIT_ATOM);

  if (!weatherData) return null;

  const chanceOfRain = forecastData ? rainChance(forecastData.list) : 0;
  const tempFormatted = formatTemp(weatherData.main.temp, tempUnit);
  const iconUrl = getIconUrl(weatherData.weather[0].icon);

  return (
    <div className="bg-[#202b3b]/60 border border-slate-700/30 rounded-3xl p-6 md:p-8 flex justify-between items-center shadow-lg w-full">
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-white capitalize">
            {weatherData.name}, {weatherData.sys.country}
          </h1>
          <p className="text-xs md:text-sm text-slate-400 font-mono mt-1 capitalize">
            {weatherData.weather[0].description} | Rain Chance: {chanceOfRain}%
          </p>
        </div>
        <div className="text-5xl md:text-7xl font-black text-white tracking-tighter">
          {tempFormatted}
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-sky-500/10 blur-2xl rounded-full"></div>
        <img
          src={iconUrl}
          alt={weatherData.weather[0].description}
          className="w-24 h-24 md:w-36 md:h-36 relative z-10 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.25)] hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
