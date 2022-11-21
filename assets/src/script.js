// declare global variables
const apiKEY = "e44adac92450ec69c542cdd83e3a48b0";
let currentCity = "";
let prevCity = "";
// let coords;
// let currentWeather;
// let forecastData;

// display current conditions of searched city
let getCurrentWeather = (event) => {
  let cityName = $("#citySearch").val();
  currentCity = $("#citySearch").val();

  const BASE_URL = "https://api.openweathermap.org";
  const requestURL = `"${BASE_URL}/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=" + apiKEY;`;

  fetch(requestURL).then((response) => {
    return response.json();
  });
};
// import {
//   forecastSection,
//   form,
//   searchHistorySection,
//   currentWeatherSection,
// } from "./lib";
// import apiService from "./services/api.service";
// import renderService from "./services/render.service";

// // Activate search button
// document.querySelectorAll("button").forEach((button) => {
//   button.classList.add("button");
// });

// // submit form information
// document.querySelector("form").addEventListener("submit", async (event) => {
//   event.preventDefault();

//   let cityName = event.target.city.value;

//   let forecastData = await getWeatherByCity(cityName);

//   renderService.renderCoords(cityName, forecastData);
// });

// // Add history to local storage
// const historyStorage = JSON.parse(localStorage.getItem("searchHistory")) || [];

// // search and display the current weather by grabbing searched city from search box and adding to search history
// function addCityToHistoryStorage(cityName, coords) {
//   // to avoid duplicate city search in history section
//   const cityNameUppercase = cityName.toUppercase();
//   if (!historyStorage.find((city) => city.name === cityNameUppercase)) {
//     historyStorage.push({ name: cityNameUppercase, coords });
//     localStorage.setItem("searchHistory", JSON.stringify(historyStorage));
//   }
// }

// async function renderWeather(coords) {
//   currentWeather = await apiService.getCurrentWeather(coords);
//   forecastData = await apiService.getForecastData(coords);

//   renderService.renderWeather(currentWeather, currentWeatherSection);
//   renderService.renderForcast(forecastData, forecastSection);
// }

// renderService.renderHistoryButtons(historyStorage, searchHistorySection);

// form.addEventListener("submit", async (event) => {});

// searchHistorySection.addEventListener("click", async (event) => {

// });

// });

// render.service
// const resultsList = document.querySelector("#results ul");
// const resultsH2Span = document.querySelector("#current");

// const futureList = document.querySelector("#future ul");
// const futureH2Span = document.querySelector("#forecast");
