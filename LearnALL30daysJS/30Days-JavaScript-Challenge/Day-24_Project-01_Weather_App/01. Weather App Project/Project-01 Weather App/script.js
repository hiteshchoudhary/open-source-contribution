const apiKey = "6685faf716a7f4b64ca8034c64565ca5";

// OpenWeatherMap API key

document.getElementById("search-btn").addEventListener("click", () => {
  const city = document.getElementById("city-input").value;
  fetchWeatherData(city);
});

const weatherIcons = {
  clear: "https://openweathermap.org/img/wn/01d.png", // Replace with actual image paths
  clouds: "https://openweathermap.org/img/wn/02d.png",
  rain: "https://openweathermap.org/img/wn/09d.png",
  default: "https://openweathermap.org/img/wn/10d.png",
};

function fetchWeatherData(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("city-name").textContent = data.name;
      document.getElementById(
        "temperature"
      ).textContent = `Temperature: ${data.main.temp}°C`;
      const weatherCondition = data.weather[0].description;
      document.getElementById(
        "weather-condition"
      ).innerHTML = `Condition: ${weatherCondition} <img src="${
        weatherIcons[data.weather[0].main.toLowerCase()] || weatherIcons.default
      }" class="weather-icon" alt="${weatherCondition}">`;
      fetchForecastData(city);
    })
    .catch((error) => console.error("Error fetching weather data:", error));
}

function fetchForecastData(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      const forecastContainer = document.querySelector(".forecast");
      forecastContainer.innerHTML = ""; // Clear previous forecast
      data.list.forEach((forecast, index) => {
        if (index % 8 === 0) {
          // Display forecast for every 24 hours
          const forecastElement = document.createElement("div");
          forecastElement.innerHTML = `
                  <p>Date: ${new Date(
                    forecast.dt * 1000
                  ).toLocaleDateString()}</p>
                  <p>Temperature: ${forecast.main.temp}°C</p>
                  <p>Condition: ${forecast.weather[0].description} <img src="${
            weatherIcons[forecast.weather[0].main.toLowerCase()] ||
            weatherIcons.default
          }" class="weather-icon" alt="${forecast.weather[0].description}"></p>
                `;
          forecastContainer.appendChild(forecastElement);
        }
      });
    })
    .catch((error) => console.error("Error fetching forecast data:", error));
}
