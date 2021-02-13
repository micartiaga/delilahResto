require('dotenv/config');
const express = require('express');
const route = express.Router();
const User = require('../../models/User');

route.delete("/", async (req, res) => {
    try {
        let username = req.body.username;
        let usuario = await User.findOne({ where: { username: username } });

        // VALIDANDO SI EXISTE EL USUARIO
        if (!usuario) {
            return res.status(404).send({ Error: error.message })
        }
        usuario.destroy();
        
        return res.sendStatus(200);
    }
    catch (error) {
        console.log({ message: error.message });
        return res.status(404).send({ Error: error.message })
    }
});

module.exports = route;