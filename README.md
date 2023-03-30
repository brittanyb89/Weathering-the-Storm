# Tempered-weather

Server-Side APIs Challenge: Weather Dashboard

[GitHub](https://github.com/brittanyb89/weathering-the-storm)

[Deployed Application](https://brittanyb89.github.io/weathering-the-storm)

## Table of Contents

- [Description](#description)
- [Mock-up](#mock-up)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Description

This is a third-party API application that allows users to search for a city and view the current weather conditions as well as a five-day forecast. The appication also stores the user's search history and allows them to click on a city in the search history to view the weather conditions for that city. This weather dashboard uses the OpenWeather API to retrieve weather data for cities and will run in the browser and feature dynamically updated HTML and CSS.

# User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

# Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Mock-up

The following image shows the web application's appearance and functionality:

![Weather Dashboard](assets/images/weather%20dashboard.png)

## Usage

Type in a city name in the search bar and click the search button. The current weather conditions and a five-day forecast will be displayed. The city name will also be added to the search history. Click on a city in the search history to view the weather conditions for that city.

## Credits

- [OpenWeather API](https://openweathermap.org/api)
- [AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)

## License

![NPM](https://img.shields.io/npm/l/inquirer?style=plastic)

MIT License

Copyright (c) 2022 Brittany Burton

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

```

```