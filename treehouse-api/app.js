// simple way to look at user badge count and js points
const https = require("https");
const { type } = require("os");
const userName = "cw10";
const apiUrl = `https://teamtreehouse.com/${userName}.json`;

const printMessage = (userName, badgeCount, points) =>
  `${userName} has ${badgeCount} total badge(s) and ${points} points in JavaScript.`;
// connect to API url
https.get(apiUrl, (res) => {
  console.log(`status: ${res.statusCode}`);
  // console.log("headers:");
  // console.dir(res.headers);
  let d = "";
  res.on("data", (data) => {
    d += data;
  });

  res.on("end", () => {
    const profile = JSON.parse(d);
    console.dir(profile);
  });
});
// parse the data
// print the data

console.log(printMessage(userName, 10, 500));
