const homeRoute = require("./home.router");

function route(app) {
  app.use("/index", homeRoute);
}
module.exports = route;
