const express = require('express');
const route = express.Router();
const connection = require('../database/connection-DB');
const {auth} = require('../middleware/authentication');
const {isAdmin} = require('../middleware/admin');


const register = require('../controllers/users/register');
const users = require('../controllers/users/users');
const deleteUser = require('../controllers/users/deleteUser');
const editUser = require('../controllers/users/editUser');
const login = require('../controllers/users/login');


route.use('/add', register);
route.use('/delete',auth, deleteUser);
route.use('/edit', auth,  editUser);
route.use('/login', login);
route.use('/all', auth,  isAdmin, users);


module.exports = route;