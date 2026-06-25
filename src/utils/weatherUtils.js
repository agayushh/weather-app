export function formatTemp(temp, unit) {
  const rounded = Math.round(temp);
  return `${rounded}°${unit === 'metric' ? 'C' : 'F'}`;
}

export function formatWind(speedMs, windUnit) {
  if (windUnit === 'kmh') return `${Math.round(speedMs * 3.6)} km/h`;
  if (windUnit === 'ms') return `${speedMs.toFixed(1)} m/s`;
  if (windUnit === 'knots') return `${Math.round(speedMs * 1.944)} kn`;
  return `${Math.round(speedMs * 3.6)} km/h`;
}

export function formatTime(dt, is12Hour = false, timezoneOffset = null) {
  const date = new Date(dt * 1000);
  if (timezoneOffset !== null) {
    const utcMs = date.getTime() + (date.getTimezoneOffset() * 60000);
    const cityDate = new Date(utcMs + (timezoneOffset * 1000));
    return cityDate.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: is12Hour,
    });
  }
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: is12Hour,
  });
}

/** Group forecast list (3-hourly) by calendar day label */
export function groupByDay(list) {
  const days = {};
  list.forEach((item) => {
    const date = new Date(item.dt * 1000);
    const key = date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    });
    if (!days[key]) days[key] = [];
    days[key].push(item);
  });
  return days;
}

/** Get today's 3-hourly entries */
export function getTodayHourly(list) {
  const today = new Date().toDateString();
  return list.filter((item) => new Date(item.dt * 1000).toDateString() === today);
}

/** Summarise each day: maxTemp, minTemp, dominant weather */
export function getDailySummary(grouped) {
  return Object.entries(grouped).map(([day, items]) => {
    const temps = items.map((i) => i.main.temp);
    const maxTemp = Math.max(...temps);
    const minTemp = Math.min(...temps);
    const midItem = items[Math.floor(items.length / 2)];
    return {
      day,
      maxTemp,
      minTemp,
      weather: midItem.weather[0].description,
      icon: midItem.weather[0].icon,
    };
  });
}

/** Average rain probability for next few forecast slots (0-100) */
export function rainChance(list) {
  if (!list || !list.length) return 0;
  const next = list.slice(0, 3);
  const avg = next.reduce((sum, item) => sum + (item.pop || 0), 0) / next.length;
  return Math.round(avg * 100);
}
