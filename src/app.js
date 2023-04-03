const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const  path  = require('path');
const app = express();
const port = 50004;

//http logger
app.use(morgan('combined'));

// template engine
app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'.\\resources\\views')); 

app.use(express.static(path.join(__dirname,'.\\resources')))
app.get("/home", (req, res) => {
  res.render('index');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port} ${__dirname}`);
});
