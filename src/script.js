const form = document.querySelector("form");
const searchHistorySection = document.querySelector(".search-history");
const todaySection = document.querySelector(".today");
const forecastSection = document.querySelector(".forecast");

const BASE_URL = "https://api.openweathermap.org";
const apiKEY = "e44adac92450ec69c542cdd83e3a48b0";

// Add history to local storage
let historyStorage = JSON.parse(localStorage.getItem("searchHistory")) || [];

// Placeholders that will get updated when api service is called
let coords;
let currentWeather;
let forecastData;
let addCityToHistory;

// Activate search button
document.getElementById("searchBtn").addEventListener("click", function () {
  let cityName = document.getElementById("citySearch").value;
});

//  Add searched city to history section with coordinates
function addToHistory(cityName) {
  let city = document.getElementById("listHistory");
  city.textContent = cityName;
  searchHistorySection.appendChild(city);
  historyStorage.push(cityName);
  localStorage.setItem("searchHistory", JSON.stringify(historyStorage));
}

// Activate clear history button
document.getElementById("clearHistory").addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

// Activate search history
document.getElementById("listHistory").addEventListener("click", function () {
  let cityName = document.getElementById("citySearch").value;
  coords(cityName);
});

// Activate searched city as button
document.querySelector("ul").addEventListener("click", function (event) {
  let citySearch = event.target.textContent;
  coords(citySearch);
});

// Function to get the coordinates of the searched city
function getCoords(cityName) {
  const coordsURL = `${BASE_URL}/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKEY}`;

  fetch(coordsURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("This is the coordinates DATA: ", data);
      console.log(data[0].lat);
      console.log(data[0].lon);
      let lat = data[0].lat;
      let lon = data[0].lon;
      getWeatherInfo(lat, lon);
    })
    .catch(function () {
      console.log("error");
    });
}

// Get weather API
function getWeatherInfo(lat, lon) {
  const weatherURL = `${BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKEY}`;

  // fetch weather data
  fetch(weatherURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("This is current weather DATA: ", data);
      console.log(data.list);
      let list = document.createElement("div");
      // list.innerHTML = list[0];
      // current.appendChild(list)
      // document.getElementById("demo").innerHTML = data[0];
      console.log(data.list[0]);
      console.log(data.list[0].dt);
      console.log(data.list[0].main.temp);
      console.log(data.list[0].main.humidity);
      console.log(data.list[0].weather[0].icon);
      console.log(data.list[0].wind.speed);

      //Display current weather icon
      let iconEl = document.createElement('img');
      iconEl.src = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png"
      list.appendChild(iconEl);

      // Display temperature in Fahrenheit
      let temp = document.createElement('p');
      temp.textContent = `Temperature: `+ data.list[0].main.temp + `°F`
      list.appendChild(temp);

      // Display windspeed in MPH
      let windSpeed = document.createElement('p');
      windSpeed.textContent = `WindSpeed: ` + data.list[0].wind.speed + `MPH`
      list.appendChild(windSpeed);

      // Display humidity in %
      let humidityValue = document.createElement('p');
      humidityValue.textContent = `Humidity: `+ data.list[0].main.humidity + `%`
      list.appendChild(humidityValue);

      console.log(list);
      let ul = document.getElementById("currentWeather");
      ul.appendChild(list);
    })
}

// submit form information
document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();
  let cityName = document.getElementById("citySearch").value;
  getCoords(cityName);
});

// fetch forecast data
function getForecast(lat, lon) {
  const forecastURL = `${BASE_URL}/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKEY}`;

  fetch(forecastURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("This is the forecast DATA: ", data);
      console.log(data.daily[0].dt);
      console.log(data.daily[0].temp.day);
      console.log(data.daily[0].humidity);
      console.log(data.daily[0].weather[0].icon);
      console.log(data.daily[0].wind_speed);
    })
    .catch(function () {
      console.log("error");
    });
}

// Display forecast
function displayForecast() {
  let forecast = document.createElement("div");
  forecast.innerHTML = forecastData;
  forecastSection.appendChild(forecast);
}

// Display search history
function displaySearchHistory() {
  let history = document.createElement("div");
  history.innerHTML = addCityToHistory;
  searchHistorySection.appendChild(history);
}















