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
    let usuario = await User.findOne({ where: req.body.username });
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
    })
    res.json(newUser.username, newUser.fullname);

  }
  catch (error) {
    console.log({ message: error.message });
    return res.status(409).send({ Error: error.message })
  }
});

module.exports = route;

