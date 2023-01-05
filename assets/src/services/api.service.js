// const apiKEY = "e44adac92450ec69c542cdd83e3a48b0";
// const BASE_URL = "https://api.openweathermap.org";
const apiCoords = `${BASE_URL}/geo/1.0/direct`;
const apiWeather = `${BASE_URL}/data/2.5/weather`;
const apiForecast = `${BASE_URL}/data/2.5/forecast`;

// API call api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
export default {
  getWeatherResponse(cityName) {
    return fetch(
      `${BASE_URL}/data/2.5/forecast?lat={lat}&lon={lon}&appid=${apiKEY}`
    );
  },
  async getCoords(city) {
    const response = await fetch(
      `${apiCoords}?q=${city}&limit=5&appid=${apiKEY}`
    );
    const [initialCity] = await response.json();
    return { lat: initialCity.lat, lon: initialCity.lon };
  },
  async getCurrentWeather(weather) {
    const response = await fetch(
      `${apiWeather}?lat=${weather.lat}&lon=${weather.lon}&units=imperial&appid=${apiKEY}`
    );
    return await response.json();
  },
  async getForecastData(coords) {
    const response = await fetch(
      `${apiForecast}?lat=${coords.lat}&lon=${coords.lon}&units=imperial&appid=${apiKEY}`
    );
    return await response.json();
  },
};
