require('dotenv/config');
const express = require('express');
const route = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcrypt');


route.post("/", async (req, res) => {

    let key = req.body.key;

    if (key == process.env.KEY) {
        try {
            let usuario = await User.findOne({ where: { username: req.body.username } });

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
                admin: "1"
            });

            return res.json({ username: newUser.username, fullname: newUser.fullname, message: 'Se ha creado un nuevo admin.' });
        }
        catch (error) {
            console.log(error);
            return res.status(409).send('No te podes registrar.')
        }
    } else {
        return res.status(401).send('No tiene los permisos para crear un admin.')
    }
});

module.exports = route;