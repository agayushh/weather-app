import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { CITY_ATOM } from "../state/atom/city";
import { TEMP_UNIT_ATOM, TIME_FORMAT_ATOM } from "../state/atom/settings";
import { fetchCurrentWeather, fetchForecast, getIconUrl } from "../services/weatherApi";
import { formatTemp, formatTime, rainChance, groupByDay, getDailySummary } from "../utils/weatherUtils";

export default function CitySelected() {
  const city = useRecoilValue(CITY_ATOM);
  const tempUnit = useRecoilValue(TEMP_UNIT_ATOM);
  const timeFormat = useRecoilValue(TIME_FORMAT_ATOM);

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    let isMounted = true;
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [wData, fData] = await Promise.all([
          fetchCurrentWeather(city, tempUnit),
          fetchForecast(city, tempUnit),
        ]);
        if (isMounted) {
          setWeather(wData);
          setForecast(fData);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Failed to load details");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [city, tempUnit]);

  if (loading) {
    return (
      <div className="h-full w-full flex items-center justify-center text-slate-400 font-mono">
        <p>Loading details...</p>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="h-full w-full flex items-center justify-center text-red-400 font-mono p-5 text-center">
        <p>{error || "No city selected."}</p>
      </div>
    );
  }

  const chanceOfRain = forecast ? rainChance(forecast.list) : 0;
  const currentTemp = formatTemp(weather.main.temp, tempUnit);
  const iconUrl = getIconUrl(weather.weather[0].icon);

  // Today's hourly forecast (first 3 slots)
  const hourlyForecast = forecast ? forecast.list.slice(0, 3) : [];

  // Next 3 days forecast
  const grouped = forecast ? groupByDay(forecast.list) : {};
  const dailySummary = forecast ? getDailySummary(grouped).slice(1, 4) : []; // Next 3 days (exclude today)

  return (
    <div className="w-full rounded-3xl bg-[#202b3b]/60 p-6 border border-slate-700/30 shadow-lg">
      <div className="border-b border-slate-700 pb-6 flex justify-between items-center">
        <div>
          <p className="text-4xl text-white font-bold">{weather.name}</p>
          <p className="text-slate-400 mt-2 font-mono text-sm capitalize">
            {weather.weather[0].description} | Rain Chance: {chanceOfRain}%
          </p>
          <p className="text-5xl text-white mt-6 font-bold">{currentTemp}</p>
        </div>
        <img
          src={iconUrl}
          alt={weather.weather[0].description}
          className="w-24 h-24 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
        />
      </div>

      {/* Hourly forecast */}
      <div className="border-b border-slate-700 py-6">
        <p className="text-slate-400 text-sm font-mono mb-4">
          Today&apos;s Forecast
        </p>
        <div className="flex justify-around">
          {hourlyForecast.map((slot, index) => {
            const slotTime = formatTime(slot.dt, timeFormat === "12h", forecast.city.timezone);
            const slotTemp = formatTemp(slot.main.temp, tempUnit);
            const slotIcon = getIconUrl(slot.weather[0].icon);

            return (
              <div
                key={index}
                className="flex flex-col items-center border-r border-slate-700/50 last:border-0 px-4"
              >
                <div className="text-xs text-slate-400 font-bold mb-1">
                  {slotTime}
                </div>
                <img src={slotIcon} alt="Icon" className="w-12 h-12" />
                <div className="text-sm font-bold text-white mt-1">
                  {slotTemp}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3 Days Forecast */}
      <div className="py-6">
        <p className="text-slate-400 font-mono text-sm mb-4">
          3 Days Forecast
        </p>
        <div className="flex flex-col gap-3">
          {dailySummary.map((dayData, index) => {
            const dayName = dayData.day.split(",")[0];
            const dayIcon = getIconUrl(dayData.icon);

            return (
              <div
                key={index}
                className="flex justify-between items-center text-slate-300 font-mono text-sm border-b border-slate-800/40 pb-2 last:border-0"
              >
                <div className="w-20 font-bold text-slate-400">{dayName}</div>
                <div className="flex items-center gap-2">
                  <img src={dayIcon} alt="Weather icon" className="w-10 h-10" />
                  <span className="capitalize text-xs text-slate-500 hidden md:inline">
                    {dayData.weather.split(" ")[0]}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-white font-bold">{Math.round(dayData.maxTemp)}°</span>
                  <span className="text-slate-600">/</span>
                  <span className="text-slate-500">{Math.round(dayData.minTemp)}°</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
