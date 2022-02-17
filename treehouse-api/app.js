// simple way to look at user badge count and js points
const https = require("https");
const http = require("http");

const printMessage = (userName, badgeCount, points) =>
  `${userName} has ${badgeCount} total badge(s) and ${points} points in JavaScript.`;
// connect to API url
const getProfileInfo = (userName) => {
  const apiUrl = `https://teamtreehouse.com/${userName}.json`;
  try {
    https
      .get(apiUrl, (res) => {
        // console.dir(res.headers);
        const status = res.statusCode;
        if (status === 200) {
          let d = "";
          // data event
          res.on("data", (data) => {
            d += data;
          });

          // end data event
          res.on("end", () => {
            try {
              const profile = JSON.parse(d);
              const badges = profile.badges.length;
              const jsPoints = profile.points.JavaScript;
              const msg = printMessage(userName, badges, jsPoints);
              console.log(msg);
            } catch (e) {
              console.error(e.message);
            }
          });
        } else {
          const statusMessage = http.STATUS_CODES[status];
          const statusError = new Error(
            `An error occurred when working on ${userName}: ${status} (${statusMessage})`
          );
          console.error(statusError.message);
        }
      })
      .on("error", (e) => console.error(e.message));
  } catch (e) {
    console.error(e.message);
  }
};

const users = process.argv.slice(2);
users.forEach(getProfileInfo);
