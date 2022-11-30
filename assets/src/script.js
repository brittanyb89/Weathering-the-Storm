const form = document.querySelector("form");
const searchHistorySection = document.getElementById("searchHistory");
const forecastSection = document.getElementById("forecast");
const currentWeatherSection = document.getElementById("currentWeather");
const apiKEY = "e44adac92450ec69c542cdd83e3a48b0";

// Add history to local storage
const historyStorage = JSON.parse(localStorage.getItem("searchHistory")) || [];

function createCurrentWeatherHeader({ cityName, description, icon }) {
  const header = document.createElement("header");
  const title = document.createElement("h2");
  const iconEl = document.createElement("img");

  iconEl.src = `http://openweathermap.org/img/wn/${icon}.png`;
  icon.alt = description;

  header.appendchild(title);
  header.appendChild(iconEl);

  return header;
}

function createWeatherH2() {
  const h2 = document.createElement("h2");
  h2.textContent = "5-Day Forecast";

  return h2;
}

function createForecastList(forecastData) {}

function createWeatherList({ temp, windSpeed, humidity }) {}

function renderCurrentWeather(weather, el) {
  el.innerHTML = "";
  // destructuring and renaming object
  const { name: cityName, main, weather: weatherData } = weather;
  const { temp, humidity } = main;
  const { description, icon } = weatherData[0];
  const { speed: windSpeed } = weather.wind;

  el.appendchild(createCurrentWeatherHeader({ cityName, description, icon }));
  el.appendchild(createWeatherList({ temp, windSpeed, humidity }));
  // tailwind to give top to bottom effect
  // el.classList.add("border-y");
}
function renderForecast(forecast, el) {}
function renderHistoryButtons(history, el) {}

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

  renderWeather(currentWeather, currentWeatherSection);
  renderCurrentWeather(forecastData, forecastSection);
}

renderHistoryButtons(historyStorage, searchHistorySection);

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
function getweatherInfo(lat, lon) {
  const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKEY}`;

  fetch(weatherURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("This is currect weather DATA: ", data);
    });
}
function getCoords(city) {
  const coordsURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKEY}`;

  fetch(coordsURL)
    .then(function (response) {
      console.log("THIS IS REPOSNSE: ", response);
      return response.json();
    })
    .then(function (data) {
      console.log("THIS IS DATA: ", data);
      console.log("lat: ", data[0].lat);
      console.log("lon: ", data[0].lon);
      getweatherInfo(data[0].lat, data[0].lon);
    });
}
// submit form information
document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  let cityName = document.getElementById("citySearch").value;

  getCoords(cityName);

  renderCoords(cityName, forecastData);
});

document
  .getElementById("cityResults")
  .addEventListener("click", async (event) => {
    if (event.target.searchHistory === "button") {
      let cityResults = event.target.innerText.toUppercase();

      let dataEl = await apiService.getWeatherByCity(cityResults);
    }
  });
