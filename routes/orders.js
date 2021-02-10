const express = require('express');
const route = express.Router();
const connection = require('../database/connection-DB');

const orders = require('../controllers/orders/orders');
const userOrders = require('../controllers/orders/ordersUser');
const updateOrder = require('../controllers/orders/updateOrder');
const deleteOrder = require('../controllers/orders/deleteOrder');
const addOrder = require('../controllers/orders/newOrder');
const orderById = require('../controllers/orders/orderById');


route.use('/add', addOrder);
route.use('/delete', deleteOrder);
route.use('/update', updateOrder);
route.use('/orders', orders);
route.use('/userOrders', userOrders);
route.use('/order', orderById);


module.exports = route;