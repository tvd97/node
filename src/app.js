const db = require('./app/config/database/database');
const morgan = require('morgan');
const route = require('./routes/index');

const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 4000;

// Use connect method to connect to the Server
db.connect();

app.use(morgan('tiny'));

// middleware express < 4.16 install body_parser
//xml http, fetch
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '.', 'resources', 'views'));

// path file
app.use(express.static(path.join(__dirname, '.', 'resources')));

// init router
route(app);
app.listen(port, () => {
  console.log(`Server app listening on port ${port} ${__dirname}`);
});
