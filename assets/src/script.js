// Used day.js to format date
let date = dayjs().format('M/DD/YYYY');
dayjs().format('M/D/YYYY')

const form = document.querySelector("form");
const searchHistorySection = document.getElementById("searchHistory");
const forecastSection = document.getElementById("forecast");
const currentWeatherSection = document.getElementById("currentWeather");
const apiKEY = "e44adac92450ec69c542cdd83e3a48b0";
const BASE_URL = "https://api.openweathermap.org";
const cityResults = document.getElementById("cityResults");

let prevCity = "";
let coords;
let currentWeatherIconUrl = "";
let humidityValue = "";

// Add history to local storage
const historyStorage = JSON.parse(localStorage.getItem("searchHistory")) || [];

// Activate search button
document.querySelectorAll("button").forEach((button) => {
  button.classList.add("button");
});
function getweatherInfo(lat, lon) {
  const weatherURL = `${BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKEY}`;

  fetch(weatherURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("This is current weather DATA: ", data);
      console.log(data.list);
      let list = document.createElement('div');
      // list.innerHTML = list[0];
      // current.appendChild(list)
      // document.getElementById("demo").innerHTML = data[0];
      console.log(data.list[0]);
      console.log(data.list[0].dt);
      console.log(data.list[0].main.temp);
      console.log(data.list[0].main.humidity);
      console.log(data.list[0].weather[0].icon);
      console.log(data.list[0].wind.speed);
      // Display current date
      let dateEl = document.createElement('h2');
      dateEl.textContent = data.list[0].dt;
      list.appendChild(dateEl);

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

// set function add search to history section
// const cityNameUppercase = citySearch.toUppercase();
function saveSearch() {
  const cityInputSearch = citySearch.value;
  historyStorage.push({ city: cityInputSearch });
  localStorage.setItem("searchHistory", JSON.stringify(historyStorage));
  for (let i = 0; i < historyStorage.length; i++) {
    let ul = document.createElement("ul");
    ul.textContent = `${historyStorage[i].city}`;
    cityResults.append(ul);
  }
}



// submit form information
document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();
  saveSearch();
  let cityName = document.getElementById("citySearch").value;

  getCoords(cityName);

  // renderCoords(cityName, forecastData);
});
// API call api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
function getCoords(city) {
  const coordsURL = `${BASE_URL}/geo/1.0/direct?q=${city},US&limit=1&appid=${apiKEY}`;

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
      data.forEach((cityName) => {
        let div = `<p>${cityName.name}</p>`;
        document.getElementById("current").innerHTML = div;
      });
    });
};







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
