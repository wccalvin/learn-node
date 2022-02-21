const https = require("https");
const http = require("http");
const api = require("./api.json");

const getWeatherData = (location) => {
  const apiKey = api.key;
  const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
  const apiUrl = `${weatherUrl}?q=${location}&APPID=${apiKey}`;
  try {
    req = https.get(apiUrl, (res) => {
      const status = res.statusCode;
      if (status === 200) {
        let data = "";
        res.on("data", (d) => {
          data += d;
        });
        res.on("end", () => {
          console.dir(data);
        });
      } else {
        const statusMessage = http.STATUS_CODES[status];
        const statusError = new Error(
          "An error occurred when retrieving weather data for " +
            `${location}: ${status} (${statusMessage})`
        );
        console.error(statusError.message);
      }
    });
    req.on("error", (e) => {
      console.error(e);
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports.get = getWeatherData;
