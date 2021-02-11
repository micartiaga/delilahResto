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
        // VALIDANDO CONTRASEÑA
        let pass = req.body.password;
        let userDBPass = usuario.dataValues.password;
        if (bcrypt.compareSync(pass, userDBPass)) {
            // CREO LOS TOKEN

            const accessToken = jwt.sign({username: username}, process.env.TOKEN);
            const temporalToken = jwt.sign({username: username}, process.env.TOKEN_TEMP, { expiresIn: "15s" });

            const userToken = await Token.create({
                token: accessToken
            });

            usuario.addToken(userToken);

            return res.status(201).json({ username: username, accessToken: accessToken, temporalToken: temporalToken })         
        }

    }
    catch (error) {
        console.log({ message: error.message });
        return res.status(404).send({ Error: error.message })
    }


});

module.exports = route;