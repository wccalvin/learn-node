const https = require("https");
const api = require("./api.json");

const getWeatherData = (location) => {
  const apiKey = api.key;
  const weatherUrl = "http://api.openweathermap.org/data/2.5/weather";
  console.log(location);
  const apiUrl = `${weatherUrl}?q=${location}&APPID=${apiKey}`;
  console.log(apiUrl);
  // try {
  //   https.get()
  // }
};

module.exports.get = getWeatherData;
