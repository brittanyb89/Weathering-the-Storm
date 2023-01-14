const currentWeatherSection = document.getElementById("currentWeather");
const searchHistorySection = document.getElementById("searchHistory");

const apiKEY = "e44adac92450ec69c542cdd83e3a48b0";
const BASE_URL = "https://api.openweathermap.org";

// When I search for a city, I am presented with current and future conditions for that city and that city is added to the search history

// Add date format to the current weather and 5-day forecast
const date = dayjs().format("M/DD/YYYY");
const dateEl = document.createElement("h2");
dateEl.textContent = date;
currentWeatherSection.append(dateEl);

// Add search history to local storage
const historyStorage = JSON.parse(localStorage.getItem("searchHistory")) || [];

// Activate search button
document.getElementById("searchBtn").addEventListener("click", function () {
  let citySearch = document.getElementById("citySearch").value;
  let citySearchUppercase = citySearch.toUpperCase();
  // Add search to history section
  historyStorage.push({ city: citySearchUppercase });
  localStorage.setItem("searchHistory", JSON.stringify(historyStorage))
});

// TODO: Create a function to display searched city name in search history
historyStorage.forEach((city) => {
  let ul = document.createElement("ul");
  ul.textContent = `${city.city}`;
  cityResults.append(ul);
});

// When I view current weather conditions for that city, I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// TODO: Create a function to get coordinates of the searched city
function getCoords(city) {
  const coordsURL = `${BASE_URL}/geo/1.0/direct?q=${city}&limit=5&appid=${apiKEY}`;

  // fetch coordinates
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
}

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