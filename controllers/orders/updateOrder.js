const express = require('express');
const route = express.Router();

route.get("/", async (req, res)=>{
    res.send("Estado de la orden");
});

module.exports = route;