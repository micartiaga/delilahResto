const express = require('express');
const route = express.Router();
const connection = require('../database/connection-DB');


const menu = require('../controllers/products/products');
const editMenu = require('../controllers/products/editProduct');
const newMenu = require('../controllers/products/newProduct');
const deleteMenu = require('../controllers/products/deleteProduct');



route.use('/', menu);
route.use('/edit', editMenu);
route.use('/add', newMenu);
route.use('/delete', deleteMenu); 




module.exports = route;