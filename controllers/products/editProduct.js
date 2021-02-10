const express = require('express');
const route = express.Router();
const connection = require('../../database/connection-DB');


route.get("/", async (req, res)=>{
    res.send("Subile el precio");
});

module.exports = route;