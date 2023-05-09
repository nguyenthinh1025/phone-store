



const express = require('express');
const routePhone = require('./routePhone');
const { routeUser } = require('./routeUser');
const routeOrder = require('./routeOder');
const routes = express.Router();


routes.use('/phone', routePhone)
routes.use('/user', routeUser)
routes.use('/order', routeOrder)


module.exports = routes