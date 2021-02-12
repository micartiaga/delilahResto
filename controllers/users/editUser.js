const express = require('express');
const route = express.Router();
const connection = require('../../database/connection-DB');
const User = require('../../models/User');


route.put("/", async (req, res)=>{
    try{
        const usuario = await User.findOne({where:  { username: req.body.username }})

        if (!usuario) {
            return res.status(404).send({ Error: error.message })
        }
        

    }
    catch(error){
        res.sendStatus(404);
    }





    res.send("Buenas edita tu usuario");
});

module.exports = route;