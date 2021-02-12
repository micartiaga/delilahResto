require('dotenv/config');
const express = require('express');
const route = express.Router();
const connection = require('../../database/connection-DB');
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const Token = require('../../models/Tokens');
const jwt = require('jsonwebtoken');

route.get("/", async (req, res) => {


    try {
        let username = req.body.username;
        let usuario = await User.findOne({ where: {username: username }});
        // VALIDANDO SI EXISTE EL USUARIO
        if (!usuario) {
            return res.status(404).send({ Error: error.message })
        }
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) {return res.sendStatus(401)}

        let tokenDB = await Token.findOne({ where: {token: token }});
        if (!tokenDB) {
            return res.status(404).send({ Error: error.message })
        }
        tokenDB.destroy();
        return res.sendStatus(200);

    }
    catch (error) {
        console.log({ message: error.message });
        return res.status(404).send({ Error: error.message })
    }

});

module.exports = route;