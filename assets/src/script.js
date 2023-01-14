const form = document.querySelector("form");

const forecastSection = document.getElementById("forecast");



const cityResults = document.getElementById("cityResults");

let prevCity = "";
let coords;
let currentWeatherIconUrl = "";
let humidityValue = "";

// Add date format to current and future weather


// Add history to local storage


// Activate search button


// Activate clear history button
document.getElementById("clearHistory").addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

// Activate search history


// Activate searched city as button
document.querySelector("ul").addEventListener("click", function (event) {
  let citySearch = event.target.textContent;
  coords(citySearch);
});

// Function to get the coordinates of the searched city


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
      let ul = document.getElementById("demo");
      ul.appendChild(list);
      currentWeatherSection.append(ul);
    });
}



// submit form information
document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();
  saveSearch();
  let cityName = document.getElementById("citySearch").value;

  coords(cityName);

  renderCoords(cityName, forecastData);
});

// API call api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// function getCoords(city) {
//   const coordsURL = `${BASE_URL}/geo/1.0/direct?q=${city},US&limit=1&appid=${apiKEY}`;

//   fetch(coordsURL)
//     .then(function (response) {
//       console.log("THIS IS REPOSNSE: ", response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log("THIS IS DATA: ", data);
//       console.log("lat: ", data[0].lat);
//       console.log("lon: ", data[0].lon);
//       getweatherInfo(data[0].lat, data[0].lon);
//       data.forEach((cityName) => {
//         let div = `<p>${cityName.name}</p>`;
//         document.getElementById("current").innerHTML = div;
//       });
//     });
// };




// TODO: Create a function to display current weather



// TODO: Create a function to display 5-day forecast



//  TODO: Create a function to display searched city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index



// TODO: Create a function to display searched city's 5-day forecast with date, an icon representation of weather conditions, the temperature, the windspeed,and the humidity



// TODO: Create a function to render the weather data to the page


// TODO: Create a function to render the 5-day forecast to the page



// TODO: Create a function to render the search history to the page








// // Weather header when weather is displayed on the app
// function createCurrentWeatherHeader({ cityName, icon }) {
// const header = document.createElement("header");
// const title = document.createElement("h2");
// const iconEl = document.createElement("img");

// icon.alt = description;

// header.appendchild(title);
// header.appendChild(iconEl);

// return header;
// } //undefined

// function createWeatherH2() {
//   const h2 = document.createElement("h2");
//   h2.textContent = "5-Day Forecast";

//   return h2;
// }

// function createForecastList(forecastData) {}

// function createWeatherList({ temperature, windSpeed, humidity }) {}

// function currentWeather(weather, el) {
//   el.innerHTML = "";
//   // destructuring and renaming object
//   const { name: cityName, main, weather: weatherData } = weather;
//   const { temperature, humidity } = main;
//   const { description, icon } = weatherData[0];
//   const { speed: windSpeed } = weather.wind;

//   el.appendchild(createCurrentWeatherHeader({ cityName, description, icon }));
//   el.appendchild(createWeatherList({ temperature, windSpeed, humidity }));
//   // tailwind to give top to bottom effect
//   // el.classList.add("border-y");
// } //no errors; undefined

// searchHistorySection.addEventListener("click", async (event) => {});

// document
//   .getElementById("cityResults")
//   .addEventListener("click", async (event) => {
//     if (event.target.searchHistory === "button") {
//       let cityResults = event.target.innerText.toUppercase();

//       let dataEl = await apiService.getWeatherByCity(cityResults);
//     }
//   });
