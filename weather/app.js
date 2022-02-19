/*
use the https://openweathermap.org/ api to get the current weather for the given
location
*/

const arg = require("./arg");
const weather = require("./weather");

const location = process.argv.slice(2);
if (location.length === 0) {
  const scriptName = process.argv[1];
  console.error("Provide the location as 'city, country' or zip.");
  console.log(`Example: node ${scriptName} New York, US`);
  console.log(`Example: node ${scriptName} 10001`);
}

const processLocation = arg.processLocation;
const givenLocation = processLocation(location);
const weatherData = weather.get(givenLocation);
