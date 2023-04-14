require('dotenv').config;
const User = require('../models/User');
const { mongooseArrayObject } = require('../util/mongooseExt');
const jwt = require('jsonwebtoken');
class LoginController {
  //[post]/login
  login(req, res, next) {
    const user = User.findOne({
      userName: req.body.userName,
      password: req.body.password,
    });
    if (!user) return res.sendStatus(401);
    const token = jwt.sign(user.userName, process.env.ACCESS_TOKEN_LOGIN);
    return res.render({
      userName: user.userName,
      token: token,
    });
  }
  //[get]/login
  index(req, res) {
    res.render('login');
  }
}
module.exports = new LoginController();
