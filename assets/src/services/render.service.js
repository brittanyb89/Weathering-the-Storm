function createCurrentWeatherHeader({ cityName, description, icon }) {
  const header = document.createElement("header");
  const title = document.createElement("h2");
  const iconEl = document.createElement("img");

  title.textContent = cityName + "" + new Date().toLocaleDateString();

  iconEl.src = `http://openweathermap.org/img/wn/${icon}.png`;
  icon.alt = description;

  header.appendchild(title);
  header.appendChild(iconEl);

  return header;
}

function createForcastH2() {
  const h2 = document.createElement("h2");
  h2.textContent = "5-Day Forecast";

  return h2;
}

// function createForecastList(forecastData) {}

// function createWeatherList({ temp, windSpeed, humidity }) {}

// export default {
//   renderCurrentWeather(weather, el) {
//     el.innerHTML = "";
//     // destructuring and renaming object
//     const { name: cityName, main, weather: weatherData } = weather;
//     const { temp, humidity } = main;
//     const { description, icon } = weatherData[0];
//     const { speed: windSpeed } = weather.wind;

//     el.appendchild(createCurrentWeatherHeader({ cityName, description, icon }));
//     el.appendchild(createWeatherList({ temp, windSpeed, humidity }));
//     // tailwind to give top to bottom effect
//     el.classList.add("border-y");
//   },
//   renderForecast(forecast, el) {},
//   renderHistoryButtons(history, el) {},
// }
