const express = require('express');
const route = express.Router();
const connection = require('../../database/connection-DB');
const User = require('../../models/User');


route.get("/", async (req, res)=>{
    res.send("Buenas te podes registrar aca");
});

route.post("/", async (req, res) => {
    console.log(req.body);
    let usuario = await User.create({
      username: req.body.username,
      fullname: req.body.fullname,
      email: req.body.email,
      phone: req.body.phone,
      adress: req.body.adress,
      password: req.body.password,
    });
    res.json(usuario);
  });

module.exports = route;