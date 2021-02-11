const express = require('express');
const route = express.Router();


route.get("/", async (req, res)=>{
    res.send("Buenas soy todos los pedidos");
});

module.exports = route;