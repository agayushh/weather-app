import { useRecoilValue } from "recoil";
import { FORECAST_DATA_ATOM } from "../state/atom/weather";
import { TEMP_UNIT_ATOM, TIME_FORMAT_ATOM } from "../state/atom/settings";
import { formatTemp, formatTime } from "../utils/weatherUtils";
import { getIconUrl } from "../services/weatherApi";

export default function DayForeCast() {
  const forecastData = useRecoilValue(FORECAST_DATA_ATOM);
  const tempUnit = useRecoilValue(TEMP_UNIT_ATOM);
  const timeFormat = useRecoilValue(TIME_FORMAT_ATOM);

  if (!forecastData || !forecastData.list) return null;

  // Take first 6 slots (representing next 18 hours)
  const items = forecastData.list.slice(0, 6);

  return (
    <div className="bg-[#202b3b]/60 border border-slate-700/30 rounded-3xl p-6 shadow-lg w-full">
      <h2 className="text-slate-400 font-mono text-xs uppercase tracking-wider mb-4">
        Today&apos;s Forecast
      </h2>
      <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        {items.map((item, index) => {
          const timeStr = formatTime(item.dt, timeFormat === "12h", forecastData.city.timezone);
          const tempStr = formatTemp(item.main.temp, tempUnit);
          const iconUrl = getIconUrl(item.weather[0].icon);

          return (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center justify-between border-r border-slate-700/30 last:border-0 pr-4 last:pr-0 w-24 text-white"
            >
              <div className="text-xs font-bold text-slate-500 font-mono">
                {timeStr}
              </div>
              <div className="my-1">
                <img
                  src={iconUrl}
                  alt={item.weather[0].description}
                  className="w-14 h-14 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                />
              </div>
              <div className="text-sm font-bold font-mono">
                {tempStr}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
