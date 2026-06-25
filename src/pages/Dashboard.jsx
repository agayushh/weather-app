import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { CITY_ATOM } from "../state/atom/city";
import { TEMP_UNIT_ATOM } from "../state/atom/settings";
import {
  WEATHER_DATA_ATOM,
  FORECAST_DATA_ATOM,
  WEATHER_LOADING_ATOM,
  WEATHER_ERROR_ATOM,
} from "../state/atom/weather";
import { fetchCurrentWeather, fetchForecast } from "../services/weatherApi";
import CurrentCity from "../components/CurrentCity";
import DayForeCast from "../components/DayForeCast";
import AirConditions from "../components/AirConditions";
import SevenDayForecast from "../components/SevenDayForecast";
import Input from "../components/Input";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const city = useRecoilValue(CITY_ATOM);
  const tempUnit = useRecoilValue(TEMP_UNIT_ATOM);

  const [, setWeatherData] = useRecoilState(WEATHER_DATA_ATOM);
  const [, setForecastData] = useRecoilState(FORECAST_DATA_ATOM);
  const [loading, setLoading] = useRecoilState(WEATHER_LOADING_ATOM);
  const [error, setError] = useRecoilState(WEATHER_ERROR_ATOM);

  useEffect(() => {
    if (!city) return;

    let isMounted = true;
    const loadWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const [weather, forecast] = await Promise.all([
          fetchCurrentWeather(city, tempUnit),
          fetchForecast(city, tempUnit),
        ]);
        if (isMounted) {
          setWeatherData(weather);
          setForecastData(forecast);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Failed to load weather data");
          setWeatherData(null);
          setForecastData(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadWeather();
    return () => {
      isMounted = false;
    };
  }, [city, tempUnit, setWeatherData, setForecastData, setLoading, setError]);

  return (
    <div className="bg-[#0b131e] min-h-screen text-slate-100 pb-24 md:pb-8">
      <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6 max-w-7xl mx-auto w-full">
        <Navbar />

        <main className="flex-1 w-full mt-4 md:mt-0">
          <Input />

          {loading && (
            <div className="flex flex-col justify-center items-center mt-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-400"></div>
              <span className="text-white mt-3 font-mono">Fetching weather data...</span>
            </div>
          )}

          {error && !loading && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-200 p-4 rounded-xl mt-6 font-mono flex justify-between items-center">
              <span>⚠️ Error: {error}</span>
              <button 
                onClick={() => window.location.reload()} 
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white text-sm"
              >
                Retry
              </button>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Weather info & details */}
              <div className="lg:col-span-2 space-y-6">
                <CurrentCity />
                <DayForeCast />
                <AirConditions />
              </div>

              {/* Weekly forecast sidebar */}
              <div className="w-full">
                <SevenDayForecast />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
