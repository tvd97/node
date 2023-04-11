const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const port = 5014;
const router = require('./src/routers/app')

//http logger
app.use(morgan("tiny"));

// midleware express < 4.16 intall body_parser
//xml http, fetch
app.use(express.urlencoded({ extended: true }));
app.use(express.json);
// template engine
app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, ".\\resources\\views"));

// path file
app.use(express.static(path.join(__dirname, ".\\resouces")));

// init router
router(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port} ${__dirname}`);
});
