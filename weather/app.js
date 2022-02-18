/*
use the https://openweathermap.org/ api to get the current weather for the given
location
*/

const location = process.argv.slice(2);
if (location.length === 0) {
  const scriptName = process.argv[1];
  console.error("Provide the location as 'city, country' or zipcode.");
  console.log(`Example: node ${scriptName} New York, US`);
  console.log(`Example: node ${scriptName} 10001`);
}

const processLocation = (location) => {
  let processedLocation = [];
  // join the given string
  location = location.join(" ");
  location = location.split(",");
  location.forEach((loc) => {
    const location = loc.trim();
    processedLocation.push(location.toLowerCase());
  });
  return processedLocation.join(",");
};

const givenLoction = processLocation(location);
console.log(givenLoction);
