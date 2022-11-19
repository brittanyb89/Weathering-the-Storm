// import apiService from "./services/api.service";
// import renderService from "./services/render.service";

document.querySelectorAll("button").forEach((button) => {
  button.classList.add("button");
});

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // add async once button is working and start api service

  // const city = event.target.city.value;

  // const data = await apiService.getWeatherByCity(city);

  // renderService.renderWeather(city, data);
});
