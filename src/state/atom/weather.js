import { atom } from "recoil";

export const WEATHER_DATA_ATOM = atom({
  key: "weatherData",
  default: null,
});

export const FORECAST_DATA_ATOM = atom({
  key: "forecastData",
  default: null,
});

export const WEATHER_LOADING_ATOM = atom({
  key: "weatherLoading",
  default: false,
});

export const WEATHER_ERROR_ATOM = atom({
  key: "weatherError",
  default: null,
});
