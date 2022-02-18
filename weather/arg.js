const processLocation = (location) => {
  let processedLocation = [];
  location = location.join(" ");
  location = location.split(",");
  location.forEach((loc) => {
    const location = loc.trim();
    processedLocation.push(location.toLowerCase());
  });
  return processedLocation.join(",");
};

module.exports.processLocation = processLocation;
