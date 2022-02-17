// simple way to look at user badge count and js points
const https = require("https");
const { type } = require("os");
const userName = "cw10";
const apiUrl = `https://teamtreehouse.com/${userName}.json`;

const printMessage = (userName, badgeCount, points) =>
  `${userName} has ${badgeCount} total badge(s) and ${points} points in JavaScript.`;
// connect to API url
https.get(apiUrl, (res) => {
  // console.dir(res.headers);
  let d = "";
  // data event
  res.on("data", (data) => {
    d += data;
  });

  // end data event
  res.on("end", () => {
    const profile = JSON.parse(d);
    const badges = profile.badges.length;
    const jsPoints = profile.points.JavaScript;
    const msg = printMessage(userName, badges, jsPoints);
    console.log(msg);
  });
});
// parse the data
// print the data
