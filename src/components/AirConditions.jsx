import { FaThermometerHalf } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useRecoilValue } from "recoil";
import { WEATHER_DATA_ATOM, FORECAST_DATA_ATOM } from "../state/atom/weather";
import { TEMP_UNIT_ATOM, WIND_UNIT_ATOM } from "../state/atom/settings";
import { formatTemp, formatWind, rainChance } from "../utils/weatherUtils";

export default function AirConditions() {
  const weatherData = useRecoilValue(WEATHER_DATA_ATOM);
  const forecastData = useRecoilValue(FORECAST_DATA_ATOM);
  const tempUnit = useRecoilValue(TEMP_UNIT_ATOM);
  const windUnit = useRecoilValue(WIND_UNIT_ATOM);

  if (!weatherData) return null;

  const realFeel = formatTemp(weatherData.main.feels_like, tempUnit);
  const windSpeed = formatWind(weatherData.wind.speed, windUnit);
  const chanceOfRain = forecastData ? rainChance(forecastData.list) : 0;
  
  // Approximate UV Index based on clouds
  const uvIndex = Math.max(1, Math.round(11 - (weatherData.clouds.all / 9)));

  const conditions = [
    {
      label: "Real Feel",
      value: realFeel,
      Icon: FaThermometerHalf,
    },
    {
      label: "Wind Speed",
      value: windSpeed,
      Icon: FaWind,
    },
    {
      label: "Chances of Rain",
      value: `${chanceOfRain}%`,
      Icon: FaDroplet,
    },
    {
      label: "UV Index / Humidity",
      value: `${uvIndex} (${weatherData.main.humidity}%)`,
      Icon: FaSun,
    },
  ];

  return (
    <div className="bg-[#202b3b]/60 border border-slate-700/30 rounded-3xl p-6 shadow-lg w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-slate-400 font-mono text-xs uppercase tracking-wider">
          Air Conditions
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6 md:gap-8">
        {conditions.map(({ label, value, Icon }, index) => (
          <div key={index} className="flex gap-4 items-start">
            <Icon className="text-xl md:text-2xl text-slate-500 mt-1 shrink-0" />
            <div>
              <p className="text-slate-400 text-xs md:text-sm font-mono">{label}</p>
              <p className="text-white text-lg md:text-2xl font-bold font-sans mt-1">
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
