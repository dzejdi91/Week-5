function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${response.data.name}`;
  let displayTemp = `${temperature}`;
  let temp = document.querySelector("#temperature");
  temp.innerHTML = `${displayTemp}`;
}
function retrievePosition(position) {
  let apiKey = "4882e7eeb92ae6455bd9db477cf3bbee";
  let units = "metric";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
}
function getLocation() {
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let pin = document.querySelector("#current-location-button");
pin.addEventListener("click", getLocation);

function searchCity(city) {
  let apiKey = "4882e7eeb92ae6455bd9db477cf3bbee";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

let searchInput = document.querySelector("#search-city");
searchInput.addEventListener("submit", handleSubmit);

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

function formatDate() {
  return formattedDate;
}

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let formattedDate = `${day} ${hours}:${minutes}`;
let h2 = document.querySelector("#date");
h2.innerHTML = formatDate(new Date());
function showFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
}
function showCelcius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}
let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", showFahrenheit);
let celcius = document.querySelector("#celcius-link");
celcius.addEventListener("click", showCelcius);
