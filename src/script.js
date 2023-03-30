// const searchHistorySection = document.querySelector(".searchHistory");
// const forecastSection = document.querySelector(".forecast");

const BASE_URL = "https://api.openweathermap.org";
const apiKEY = "e44adac92450ec69c542cdd83e3a48b0";

// Add history to local storage
// const historyStorage = JSON.parse(localStorage.getItem("searchHistory")) || [];

// Placeholders that will get updated when api service is called
let coords;
// let currentWeather;
// let forecastData;
// let addCityToHistory;

// Activate search button
document.getElementById("searchBtn").addEventListener("click", function () {
  const cityName = document.getElementById("citySearch").value;
  getCoords(cityName);
});

//  Add searched city to history section with coordinates
// function addToHistory(cityName) {
//   const city = document.getElementById("listHistory");
//   city.textContent = cityName;
//   searchHistorySection.appendChild(city);
//   historyStorage.push(cityName);
//   localStorage.setItem("searchHistory", JSON.stringify(historyStorage));
// }

// addToHistory();

// submit form information
document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const cityName = document.getElementById("citySearch").value;
  getCoords(cityName);
});

// Activate clear history button
document.getElementById("clearHistory").addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

// Activate search history
document.getElementById("listHistory").addEventListener("click", function () {
  const cityName = document.getElementById("citySearch").value;
  coords(cityName);
});

// Activate searched city as button
document.querySelector("ul").addEventListener("click", function (event) {
  const citySearch = event.target.textContent;
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
      const lat = data[0].lat;
      const lon = data[0].lon;
      getWeatherInfo(lat, lon);
      getForecast(lat, lon);
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
      const list = document.createElement("div");
      console.log(data.list[0]);
      console.log(data.list[0].dt);
      console.log(data.list[0].main.temp);
      console.log(data.list[0].main.humidity);
      console.log(data.list[0].weather[0].icon);
      console.log(data.list[0].wind.speed);

      // Display current weather icon
      const iconEl = document.createElement('img');
      iconEl.src = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png"
      list.appendChild(iconEl);

      // Display city name
      const cityName = document.createElement('h2');
      cityName.textContent = data.city.name
      list.appendChild(cityName);


      // Display date
      const date = document.createElement('h3');
      date.textContent = data.list[0].dt_txt
      list.appendChild(date);

      // Display temperature in Fahrenheit
      const temp = document.createElement('p');
      temp.textContent = `Temperature: `+ data.list[0].main.temp + `°F`
      list.appendChild(temp);

      // Display windspeed in MPH
      const windSpeed = document.createElement('p');
      windSpeed.textContent = `WindSpeed: ` + data.list[0].wind.speed + `MPH`
      list.appendChild(windSpeed);

      // Display humidity in %
      const humidityValue = document.createElement('p');
      humidityValue.textContent = `Humidity: `+ data.list[0].main.humidity + `%`
      list.appendChild(humidityValue);

      const ul = document.getElementById("currentWeather");
      // delete previous search from div tag
      ul.innerHTML = "";
      ul.appendChild(list);
    });
}

// Get forecast API
function getForecast(lat, lon) {
  const forecastURL = `${BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKEY}`;

  // fetch forecast data
  fetch(forecastURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("This is the forecast DATA: ", data);
      console.log(data.daily);
      const daily = document.createElement("div");
      console.log(data.daily[0]);
      console.log(data.daily[0].dt);
      console.log(data.daily[0].temp.day);
      console.log(data.daily[0].humidity);
      console.log(data.daily[0].weather[0].icon);
      console.log(data.daily[0].wind_speed);

      // Display forecast icon
      const iconEl = document.createElement('img');
      iconEl.src = "http://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png"
      daily.appendChild(iconEl);

      // Display forecast date
      const date = document.createElement('h3');
      date.textContent = data.daily[0].dt_txt
      daily.appendChild(date);

      // Display forecast temperature in Fahrenheit
      const temp = document.createElement('p');
      temp.textContent = `Temperature: `+ data.daily[0].temp.day + `°F`
      daily.appendChild(temp);

      // Display forecast windspeed in MPH
      const windSpeed = document.createElement('p');
      windSpeed.textContent = `WindSpeed: ` + data.daily[0].wind_speed + `MPH`
      daily.appendChild(windSpeed);

      // Display forecast humidity in %
      const humidityValue = document.createElement('p');
      humidityValue.textContent = `Humidity: `+ data.daily[0].humidity + `%`
      daily.appendChild(humidityValue);

      const ul = document.getElementById("forecast");
      // delete previous search from div tag
      ul.innerHTML = "";
      ul.appendChild(daily);
  })
}



// }

// Display forecast
// function displayForecast() {
//   const forecast = document.createElement("div");
//   forecast.innerHTML = forecastData;
//   forecastSection.appendChild(forecast);
// }

// // Display search history
// function displaySearchHistory() {
//   const history = document.createElement("div");
//   history.innerHTML = addCityToHistory;
//   searchHistorySection.appendChild(history);
// }















