
function createCurrentWeatherHeader({ cityName, description, icon}) {
  const currentWeatherHeader = document.createElement("header");

  const title = document.createElement("h2");
  const iconEl = document.createElement("img");

  title.textContent = cityName + " " + new Date().toLocaleDateString();
  iconEl.src = `http://openweathermap.org/img/w/${icon}.png`;
  iconEl.alt = description;

  currentWeatherHeader.appendChild(title, iconEl);

  return currentWeatherHeader;
}

function createForecastHeader() {
  const forecastHeader = document.createElement("h2");
  forecastHeader.textContent = "5-Day Forecast";

  return forecastHeader;
}

function createForecastList(forecastData) {
  const forecastList = document.createElement("ul");

  forecastData.forEach((day) => {
    const forecastItem = document.createElement("li");
    const date = document.createElement("h3");
    const icon = document.createElement("img");

    h3.textContent = new Date(day.dt_txt).toLocaleDateString();
    icon.src = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`;
    icon.alt = day.weather[0].description;

    const weatherList = createWeatherList({
      temp: day.main.temp,
      humidity: day.main.humidity,
      windSpeed: day.wind.speed,
    });

    forecastItem.appendChild(date);
    forecastItem.appendChild(icon);
    forecastItem.appendChild(weatherList);

    forecastList.appendChild(forecastItem);
  });

  return forecastList;
}

function createWeatherList({ temp, humidity, windSpeed }) {
  const weatherList = document.createElement("ul");

  const tempItem = document.createElement("li");
  const humidityItem = document.createElement("li");
  const windSpeedItem = document.createElement("li");

  tempItem.textContent = `Temperature: ${temp} F`;
  humidityItem.textContent = `Humidity: ${humidity}%`;
  windSpeedItem.textContent = `Wind Speed: ${windSpeed} MPH`;

  weatherList.appendChild(tempItem);
  weatherList.appendChild(humidityItem);
  weatherList.appendChild(windSpeedItem);

  return weatherList;
}

export default {
  renderCurrentWeather(weather, el) {
    el.innerHTML = "";

    // Object destructuring and renaming
    const { name: cityName, main, weather: weatherData } = weather;

    const { temp, humidity } = main;
    const { description, icon } = weatherData[0];
    const { speed: windSpeed } = wind;

    const currentWeatherHeader = createCurrentWeatherHeader({
      cityName,
      description,
      icon,
    });

    const weatherList = createWeatherList({
      temp,
      humidity,
      windSpeed,
    });

    el.appendChild(currentWeatherHeader);
    el.appendChild(weatherList);

    return el;

  },
}
