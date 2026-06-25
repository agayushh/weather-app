import { useRecoilValue } from "recoil";
import { FORECAST_DATA_ATOM } from "../state/atom/weather";
import { groupByDay, getDailySummary } from "../utils/weatherUtils";
import { getIconUrl } from "../services/weatherApi";

export default function SevenDayForecast() {
  const forecastData = useRecoilValue(FORECAST_DATA_ATOM);

  if (!forecastData || !forecastData.list) return null;

  const grouped = groupByDay(forecastData.list);
  const dailySummary = getDailySummary(grouped);

  return (
    <div className="text-white bg-[#202b3b]/60 border border-slate-700/30 w-full p-6 rounded-3xl hover:border-sky-300 transition-all flex flex-col justify-between shadow-lg">
      <div>
        <p className="text-slate-400 font-mono text-xs uppercase tracking-wider mb-2">
          5-Day Forecast
        </p>
        <div className="flex flex-col gap-1">
          {dailySummary.map((forecastCard, index) => {
            const iconUrl = getIconUrl(forecastCard.icon);
            const weekday = forecastCard.day.split(",")[0];

            return (
              <div
                key={index}
                className="text-sm font-mono text-slate-400 border-b border-slate-700/30 pb-2 last:border-0 last:pb-0"
              >
                <div className="flex justify-between items-center mt-3">
                  <div className="text-slate-300 font-bold w-20">
                    {weekday}
                  </div>

                  <div className="flex items-center gap-2">
                    <img
                      src={iconUrl}
                      alt={forecastCard.weather}
                      className="w-10 h-10 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                    />
                    <div className="text-xs text-slate-500 capitalize hidden sm:block">
                      {forecastCard.weather.split(" ")[0]}
                    </div>
                  </div>

                  <div className="flex gap-2 text-sm font-bold w-16 justify-end font-mono">
                    <span className="text-white">
                      {Math.round(forecastCard.maxTemp)}°
                    </span>
                    <span className="text-slate-600">/</span>
                    <span className="text-slate-500">
                      {Math.round(forecastCard.minTemp)}°
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
