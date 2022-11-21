// declare global variables and weather API key
const apiKEY = "e44adac92450ec69c542cdd83e3a48b0";
let currentCity = "";
let prevCity = "";

// api.serivce
const BASE_URL = "https://api.openweathermap.org";

// Activate new city search button
document.querySelectorAll("button").forEach((button) => {
  button.classList.add("button");
});

document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  // let city = event.target.city.value;

  // let data = await getWeatherByCity(city);
});

// export default {
//   getWeatherResponse(currentWeather) {
//     return fetch(
//       // need lat, lon, and api key
//       `${BASE_URL}/data/${currentWeather}/forecast?lat={lat}&lon={lon}&appid={API key}`
//     );
//   },

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

// render.service
// const resultsList = document.querySelector("#results ul");
// const resultsH2Span = document.querySelector("#current");

// const futureList = document.querySelector("#future ul");
// const futureH2Span = document.querySelector("#forecast");
