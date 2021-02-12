const express = require('express');
const route = express.Router();
const Product = require('../../models/Product');


route.put("/", async (req, res) => {
    try {
        // VALIDAR QUE EXISTA EL PLATO
        const plato = await Product.findOne({ where: { meal: req.body.meal } })
        if (!plato) {
            return res.status(404).send(`No se encontró el plato`)
        };

        // PEDIR LA INFO QUE VA A EDITAR
        if (!req.body.price) {
            return res.status(404).send("Agregar info para editar")
        };

         if( req.body.price){
             plato.price = req.body.price;
         }

        await plato.save( { fields: ["price"]});
        await plato.reload();

        return res.status(201).send("Plato editado con éxito");
    }

    catch (error) {
        console.log(error);
        return res.sendStatus(404);
    }

});

module.exports = route;