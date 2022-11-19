const BASE_URL = "https://api.openweathermap.org";

export default {
  getWeatherResponse(currentWeather) {
    return fetch(
      // need lat, lon, and api key
      `${BASE_URL}/data/${currentWeather}/forecast?lat={lat}&lon={lon}&appid={API key}`
    );
  },

  async getWeatherByCity(cityName) {
    const response = await fetch(
      // need city name, state code, and country code
      `${BASE_URL}/data/2.5/forecast?q={city name},{state code},{country code}&appid={API key}`
    );
    // promise awaited by caller
    return response.json();
  },

  async getForecastByCity(futureWeather) {
    const response = await fetch(
      `${BASE_URL}/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`
    );

    // promise awaited by caller
    return response.json();
  },
};
