const homeRoute = require('./home');
const loginRoute = require('./login')
const registerRoute = require('./register')

function route(app) {
  app.use('/index', homeRoute);
  app.use('/login',loginRoute);
  app.use('/register',registerRoute);
}
module.exports = route;
