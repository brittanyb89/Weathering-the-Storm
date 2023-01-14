import apiService from "./services/api.service.js";
import renderService from "./services/render.service.js";
import { forecastSection, form, searchHistorySection, todaySection } from "./lib.js";

const currentWeatherSection = document.getElementById("currentWeather");
const cityResults = document.getElementById("cityResults");

// Add search history to local storage
const historyStorage = JSON.parse(localStorage.getItem("searchHistory")) || [];

// Placeholders that will get updated when api service is called
let coords;
let currentWeather;
let forecastData;

// Activate search button
document.getElementById("searchBtn").addEventListener("click", function () {
  let citySearch = document.getElementById("citySearch").value;
  let citySearchUppercase = citySearch.toUpperCase();

  // Create a function to display searched city name in search history
historyStorage.forEach((city) => {
  let ul = document.createElement("ul");
  ul.textContent = `${city.city}`;
  cityResults.append(ul);
});

  // Add search to history section
  //Check if city is already in search history
if (!historyStorage.find((city) => city.city === citySearchUppercase)) {
  historyStorage.push({ city: citySearchUppercase, coords });
  localStorage.setItem("searchHistory", JSON.stringify(historyStorage));
}
});

async function renderWeather(coords) {
  currentWeather = await apiService.getCurrentWeather(coords);
  forecastData = await apiService.getForecast(coords);
  console.log("Current Weather: ", currentWeather);
  console.log("Forecast Data: ", forecastData);

  renderService.renderCurrentWeather(currentWeather, todaySection);
  renderService.renderForecast(forecastData, forecastSection);
}

renderService.renderSearchHistory(historyStorage, searchHistorySection);

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = event.target.city.value;

  coords = await apiService.getCoords(city);

  addCityToHistory(city, coords);
  renderService.renderSearchHistory(historyStorage, searchHistorySection);

  renderWeather(coords);
});

historySection.addEventListener("click", async (event) => {
  const clicked = event.target;

  if (clicked.tagName === "BUTTON") {
    renderWeather({
      lat: clicked.dataset.lat,
      lon: clicked.dataset.lon,
    });
  }
});





//  I am presented with current and future conditions for that city

// Add date format to the current weather and 5-day forecast
// const date = dayjs().format("M/DD/YYYY");
// const dateEl = document.createElement("h2");
// dateEl.textContent = date;
// currentWeatherSection.append(dateEl);







// TODO: Create a function to get coordinates of the searched city
// function getCoords(city) {
//   const coordsURL = `${BASE_URL}/geo/1.0/direct?q=${city}&limit=5&appid=${apiKEY}`;

//   fetch(coordsURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log("This is the coordinates DATA: ", data);
//     })
//     .catch(function() {
//       console.log("error");
//     });
// }


  // fetch(coordsURL)
  //   .then(function (response) {
  //     return response.json();
  //   })

  //   .then(function (data) {
  //     console.log("This is the coordinates DATA: ", data);
  //     console.log(data[0].lat);
  //     console.log(data[0].lon);
  //     let lat = data[0].lat;
  //     let lon = data[0].lon;
  //     getWeatherInfo(lat, lon);
  //   });
  // }

// function getCoords(city) {
//   const coordsURL = `${BASE_URL}/geo/1.0/direct?q=${city},US&limit=1&appid=${apiKEY}`;

//   fetch(coordsURL)
//     .then(function (response) {
//       console.log("THIS IS REPOSNSE: ", response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log("THIS IS COORDINATES DATA: ", data);
//       console.log("lat: ", data[0].lat);
//       console.log("lon: ", data[0].lon);
//       getweatherInfo(data[0].lat, data[0].lon);
//       data.forEach((cityName) => {
//         let div = `<p>${cityName.name}</p>`;
//         document.getElementById("current").innerHTML = div;
//       });
//     });
// };

// When I view current weather conditions for that city, I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed


// TODO: API service to get current weather data
// function getWeatherInfo(lat, lon) {
//   const weatherURL = `${BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKEY}&units=imperial`;

// fetch(weatherURL)
// .then(function (response) {
//   return response.json();
// })
// .then(function (data) {
//   console.log("This is current weather DATA: ", data);
//   // console.log(data.list);
//   // let list = document.createElement("div");
//   // list.innerHTML = list[0];
//   // current.appendChild(list)
//   // document.getElementById("demo").innerHTML = data[0];
//   // console.log(data.list[0]);
//   // console.log(data.list[0].dt);
//   // console.log(data.list[0].main.temp);
//   // console.log(data.list[0].main.humidity);
//   // console.log(data.list[0].weather[0].icon);
//   // console.log(data.list[0].wind.speed);
// });
// }
// TODO: API call to get current weather data
// TODO: API call to get 5-day forecast data

// TODO: Create a function to display searched city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

// When I view future weather conditions for that city, I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// TODO: Create a function to display searched city's 5-day forecast with date, an icon representation of weather conditions, the temperature, the windspeed,and the humidity

// When I click on a city in the search history, I am again presented with current and future conditions for that city
// TODO: Activate search history buttons and add search history to local storage
// TODO: Activate clear history button
// TODO: Create a function to render the search history to the page