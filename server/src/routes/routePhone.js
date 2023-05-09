const express = require('express');
const { getPhone, getType, paganation, searchPhone, createPhone, updatePhone, getPhoneById, getListType, getPhoneByIdType, deletePhone } = require('../controllers/phone');
const routePhone = express.Router();


routePhone.get('/getallphone', getPhone)
routePhone.get('/gettypephone', getType)
routePhone.get('/getphonebyid/:id', getPhoneById)
routePhone.get('/paganation/:offset/:limit', paganation)
routePhone.get('/searchphone', searchPhone)
routePhone.post('/createphone', createPhone)
routePhone.post('/updatephone/:id', updatePhone)
routePhone.get('/getlisttype', getListType)
routePhone.get('/getPhoneByIdType/:id', getPhoneByIdType)
routePhone.delete('/deletephone/:id', deletePhone)


module.exports = routePhone