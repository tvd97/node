const express = require('express');
const route = express.Router();
const authentication = require('../app/middleware/auth');

const controller = require('../app/controllers/HomeController');
route.get('/', authentication, controller.index);

module.exports = route;
