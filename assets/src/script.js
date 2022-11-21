import {
  forecastSection,
  form,
  searchHistorySection,
  currentWeatherSection,
} from "./lib";
import apiService from "./services/api.service";
import renderService from "./services/render.service";

// Activate search button
document.querySelectorAll("button").forEach((button) => {
  button.classList.add("button");
});

// // submit form information
// document.querySelector("form").addEventListener("submit", async (event) => {
//   event.preventDefault();
// });

// Add history to local storage
const historyStorage = JSON.parse(localStorage.getItem("searchHistory")) || [];

// declare global variables
let currentCity = "";
let prevCity = "";
let coords;
let currentWeather;
let forecastData;

// search and display the current weather by grabbing searched city from search box and adding to search history
function addCityToHistoryStorage(cityName, coords) {
  // to avoid duplicate city search in history section
  const cityNameUppercase = cityName.toUppercase();
  if (!historyStorage.find((city) => city.name === cityNameUppercase)) {
    historyStorage.push({ name: cityNameUppercase, coords });
    localStorage.setItem("searchHistory", JSON.stringify(historyStorage));
  }
}

async function renderWeather(coords) {
  currentWeather = await apiService.getCurrentWeather(coords);
  forecastData = await apiService.getForecastData(coords);

  renderService.renderWeather(currentWeather, currentWeatherSection);
  renderService.renderForcast(forecastData, forecastSection);
}

renderService.renderHistoryButtons(historyStorage, searchHistorySection);

form.addEventListener("submit", async (event) => {});

searchHistorySection.addEventListener("click", async (event) => {});
// Activate new city search button
// document.querySelectorAll("button").forEach((button) => {
//   button.classList.add("button");
// });

// document.querySelector("form").addEventListener("submit", async (event) => {
//   event.preventDefault();

//   let city = event.target.city.value;

//   let data = await getWeatherByCity(city);

// });

// document.getElementById('citySearch').addEventListener('click', async (event) => {
//   if (event.target.city.value === 'BUTTON') {
//     const citySearch = event.target.innerText.toLowercase();
//     let data = await
//   }
// })

// render.service
// const resultsList = document.querySelector("#results ul");
// const resultsH2Span = document.querySelector("#current");

// const futureList = document.querySelector("#future ul");
// const futureH2Span = document.querySelector("#forecast");
