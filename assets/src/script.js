import {
  forecastSection,
  form,
  searchHistorySection,
  currentWeatherSection,
} from "./lib";
import apiService from "./services/api.service";
import renderService from "./services/render.service";

// Add history to local storage
const historyStorage = JSON.parse(localStorage.getItem("searchHistory")) || [];

// search and display the current weather by grabbing searched city from search box and adding to search history
function addCityToHistoryStorage(cityName, coords) {
  // to avoid duplicate city search in history section
  const cityNameUppercase = cityName.toUppercase();
  if (!historyStorage.find((city) => city.name === cityNameUppercase)) {
    historyStorage.push({ name: cityNameUppercase, coords });
    localStorage.setItem("searchHistory", JSON.stringify(historyStorage));
  }
}

async function renderForecast(coords) {
  currentWeather = await apiService.getCurrentWeather(coords);
  forecastData = await apiService.getForecastData(coords);

  renderService.renderWeather(currentWeather, currentWeatherSection);
  renderService.renderCurrentWeather(forecastData, forecastSection);
}

renderService.renderHistoryButtons(historyStorage, searchHistorySection);

form.addEventListener("submit", async (event) => {});

searchHistorySection.addEventListener("click", async (event) => {});

// declare global variables
let currentCity = "";
let prevCity = "";
let coords;
let currentWeather;
let forecastData;

// Activate search button
document.querySelectorAll("button").forEach((button) => {
  button.classList.add("button");
});

// submit form information
document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  let cityName = event.target.cityName.value;

  let forecastData = await getWeatherByCity(cityName);

  renderService.renderCoords(cityName, forecastData);
});

document
  .getElementById("cityResults")
  .addEventListener("click", async (event) => {
    if (event.target.searchHistory === "button") {
      let cityResults = event.target.innerText.toUppercase();

      let dataEl = await apiService.getWeatherByCity(cityResults);
    }
  });
