const express = require('express');
const route = express.Router();
const User = require('../../models/User');


route.put("/", async (req, res) => {
    try {
        // VALIDAR QUE EXISTA EL USUARIO
        const usuario = await User.findOne({ where: { username: req.body.username } })
        if (!usuario) {
            return res.status(404).send(`No se encontró el usuario`)
        };

        // PEDIR LA INFO QUE VA A EDITAR
        if (!req.body.phone && !req.body.email && !req.body.adress && !req.body.fullname) {
            return res.status(404).send("Agregar info para editar")
        };

         if( req.body.phone){
             usuario.phone = req.body.phone;
         }
         if( req.body.email){
            usuario.email = req.body.email;
        }
        if( req.body.adress){
            usuario.adress = req.body.adress;
        }
        if( req.body.fullname){
            usuario.fullname = req.body.fullname;
        }

        await usuario.save( { fields: ["fullname", "email", "phone", "adress"]});
        await usuario.reload();

        return res.status(201).send("Usuario editado con éxito");
    }

    catch (error) {
        res.status(404).send("Debes ingresar con un usuario");
    }

});

module.exports = route;