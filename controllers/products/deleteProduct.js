require('dotenv/config');
const express = require('express');
const route = express.Router();
const Product = require('../../models/Product');

route.delete("/", async (req, res) => {

    try {
        let meal = req.body.meal;
        
        let plato = await Product.findOne({ where: { meal: meal } });

        // VALIDANDO SI EXISTE EL PLATO

        if (!plato) {
            return res.status(404).send("El plato no existe.")
        }

        plato.destroy();
        return res.sendStatus(200);

    }
    catch (error) {
        console.log({ message: error.message });
        return res.status(404).send({ Error: error.message })
    }
});

module.exports = route;