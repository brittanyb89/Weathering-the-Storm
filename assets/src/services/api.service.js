const BASE_URL = "https://api.openweathermap.org";
const apiKEY = "e44adac92450ec69c542cdd83e3a48b0";
const apiCoords = `${BASE_URL}/geo/1.0/direct`;
const apiWeather = `${BASE_URL}/data/2.5/weather`;
const apiForecast = `${BASE_URL}/data/2.5/forecast`;

export default {
  async getCoords(city) {},
  async getCurrentWeather(coords) {},
  async getForecastData(coords) {
    const response = await fetch();

    // 40 entries on 'list' -8 per day * 5 days; we only want to use noon entires in this example, but change according to preferrence
    const data = await response.json();
    // object destructuring and renaming; in this case, it grans only noon forecast and rename it. found in network tab, click forecast and view response
    return data.list.filter(({ dt_txt: dateTxt }) => );
  },
  //   getWeatherResponse(currentWeather) {
  //     return fetch(
  //       // need lat, lon, and api key
  //       `${BASE_URL}/data/${currentWeather}/forecast?lat={lat}&lon={lon}&appid={API key}`
  //     );
};

//   async getWeatherByCity(cityName) {
//     const response = await fetch(
//       // need city name, state code, and country code
//       `${BASE_URL}/data/2.5/forecast?q={city name},{state code},{country code}&appid={API key}`
//     );
//     // promise awaited by caller
//     return response.json();
//   },

//   async getForecastByCity(futureWeather) {
//     const response = await fetch(
//       `${BASE_URL}/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`
//     );

//     // promise awaited by caller
//     return response.json();
//   },
// };