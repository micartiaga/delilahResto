const express = require('express');
const route = express.Router();
const connection = require('../../database/connection-DB');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


// route.get("/", async (req, res) => {
//   res.send("Buenas te podes registrar aca");
// });

route.post("/", async (req, res) => {
  
  try {
    
    let usuario = await User.findOne({ where: {username: req.body.username} });
    if (usuario) {
      return res.status(409).send({ message: `El usuario ya existe` });
    }
    let newPass = await bcrypt.hash(req.body.password, 10);
    let newUser = await User.create({
      username: req.body.username,
      fullname: req.body.fullname,
      email: req.body.email,
      phone: req.body.phone,
      adress: req.body.adress,
      password: newPass,
    });

    res.json({username: newUser.username, fullname: newUser.fullname});

  }
  catch (error) {
    console.log(error);
    return res.status(409).send('No te podes registrar')
  }
});

module.exports = route;

