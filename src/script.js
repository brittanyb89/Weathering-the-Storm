const form = document.querySelector("form");



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












