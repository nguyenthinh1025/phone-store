const express = require('express');
const { getOrder, getOrderById, productOrder, createOrder, getListOrder, getListOrderItem } = require('../controllers/order');

const routeOrder = express.Router();


routeOrder.get('/getorder', getOrder);
routeOrder.get('/getorderbyid/:id', getOrderById);
routeOrder.get('/getorderproductbyid/:id', productOrder);
routeOrder.post('/createorder', createOrder);
routeOrder.get('/getlistorder/:id', getListOrder);
routeOrder.get('/getlistorderitem/:id', getListOrderItem);

module.exports = routeOrder
