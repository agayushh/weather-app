import { atom } from "recoil";

// Load from localStorage or set defaults
const getSaved = (key, fallback) => {
  const item = localStorage.getItem(key);
  if (!item) return fallback;
  try {
    return JSON.parse(item);
  } catch {
    return item;
  }
};

export const TEMP_UNIT_ATOM = atom({
  key: "tempUnit",
  default: getSaved("tempUnit", "metric"), // 'metric' (C) or 'imperial' (F)
});

export const WIND_UNIT_ATOM = atom({
  key: "windUnit",
  default: getSaved("windUnit", "kmh"), // 'kmh', 'ms', 'knots'
});

export const TIME_FORMAT_ATOM = atom({
  key: "timeFormat",
  default: getSaved("timeFormat", "12h"), // '12h' or '24h'
});

export const LOCATION_ENABLED_ATOM = atom({
  key: "locationEnabled",
  default: getSaved("locationEnabled", false),
});

export const SAVED_CITIES_ATOM = atom({
  key: "savedCities",
  default: getSaved("savedCities", ["London", "New York", "Tokyo", "Paris", "Delhi"]),
});
