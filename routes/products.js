const express = require('express');
const route = express.Router();
const {isAdmin} = require('../middleware/admin');

const menu = require('../controllers/products/products');
const editMenu = require('../controllers/products/editProduct');
const newMenu = require('../controllers/products/newProduct');
const deleteMenu = require('../controllers/products/deleteProduct');


route.use('/', menu);
route.use('/edit', isAdmin, editMenu);
route.use('/add',  newMenu);
route.use('/delete', isAdmin, deleteMenu); 


module.exports = route;