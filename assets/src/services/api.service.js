// API Serivce: http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=e44adac92450ec69c542cdd83e3a48b0

const API_KEY = "e44adac92450ec69c542cdd83e3a48b0";
const BASE_URL = "https://api.openweathermap.org";
const API_COORDS = `${BASE_URL}/geo/1.0/direct`;
const API_WEATHER = `${BASE_URL}/data/2.5/weather`;
const API_FORECAST = `${BASE_URL}/data/2.5/forecast`;

export default {
  async getCoords(city) {
    const response = await fetch(
      `${API_COORDS}?q=${city}&limit=5&appid=${API_KEY}`
    );
    const [initialCity] = await response.json();
    return { lat: initialCity.lat, lon: initialCity.lon };
  },

  async getCurrentWeather(coords) {
    const response = await fetch(
      `${API_WEATHER}?lat=${coords.lat}&lon=${coords.lon}&units=imperial&appid=${API_KEY}`
    );
    // The caller will await kthe Promise object; no need to wait
    return await response.json();
  },
  async getForecastData(coords) {
    const response = await fetch(
      `${API_FORECAST}?lat=${coords.lat}&lon=${coords.lon}&units=imperial&appid=${API_KEY}`
    );
    // Since there's 40 entries on 'list' array, we need to filter it to get only the ones that are at 12:00:00
    const data = await response.json();
    return data.list.filter(
      (
        // Object destructuring and renaming
        { dt_txt: dateTxt }
      ) =>dateTxt.endsWith("12:00:00")
    );
  },
};
