// use the https://openweathermap.org/ api to get the current weather
// accept arguments

const location = process.argv.slice(2);
if (location.length === 0) {
  const scriptName = process.argv[1];
  console.error("Provide the location as 'city, country' or zipcode.");
  console.log(`Example: node ${scriptName} London, UK`);
  console.log(`Example: node ${scriptName} 10001`);
}

const processLocation = (location) => {
  let processedLocation = [];
  location.forEach((loc) => {
    loc.trim();
    loc = loc.replace(/\,/g, "");
    processedLocation.push(loc.toLowerCase());
  });
  return processedLocation.join(",");
};

const givenLoction = processLocation(location);
console.log(givenLoction);
