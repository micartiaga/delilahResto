const express = require('express');
const route = express.Router();
const {isAdmin} = require('../middleware/admin');

const orders = require('../controllers/orders/orders');
const userOrders = require('../controllers/orders/ordersUser');
const updateOrder = require('../controllers/orders/updateOrder');
const deleteOrder = require('../controllers/orders/deleteOrder');
const addOrder = require('../controllers/orders/newOrder');
const orderById = require('../controllers/orders/orderById');

route.use('/add', addOrder);
route.use('/delete', isAdmin, deleteOrder);
route.use('/update', isAdmin, updateOrder);
route.use('/all', isAdmin, orders);
route.use('/userOrders', userOrders);
route.use('/details', orderById);

module.exports = route;

