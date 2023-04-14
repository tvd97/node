const express = require('express');
const route = express.Router();

const controller = require('../app/controllers/HomeController');
route.post('/', controller.index);

module.exports = route;
