const express = require('express');
const route = express.Router();
const connection = require('../database/connection-DB');


const register = require('../controllers/users/register');
const users = require('../controllers/users/users');
const deleteUser = require('../controllers/users/deleteUser');
const editUser = require('../controllers/users/editUser');
const login = require('../controllers/users/login');


route.use('/add', register);
route.use('/', users);
route.use('/delete', deleteUser);
route.use('/edit', editUser);
route.use('/login', login);





module.exports = route;