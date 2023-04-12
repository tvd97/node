const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 4000;
const route = require('./routes/index');
const mongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://d1715:d13517f@dantv.9e5ud4b.mongodb.net/?retryWrites=true&w=majority";

mongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

//http logger
app.use(morgan('tiny'));

// midleware express < 4.16 intall body_parser
//xml http, fetch
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '.\\resources\\views'));

// path file
app.use(express.static(path.join(__dirname, '.\\resouces')));

// init router
route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port} ${__dirname}`);
});
