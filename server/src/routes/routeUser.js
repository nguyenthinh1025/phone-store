



const express = require('express');
const { register, login } = require('../controllers/user');
const routeUser = express.Router();


routeUser.post('/register', register)
routeUser.post('/login', login)

module.exports = { routeUser }