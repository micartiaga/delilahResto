const express = require('express');
const route = express.Router();
const Product = require('../../models/Product');

route.post("/", async (req, res) => {
    try {
        const meal = await Product.findOne({ where: { meal: req.body.meal } })
        if (meal) {
            return res.status(409).send('Ya existe ese plato, elija otro nombre.')
        };

        let newPlato = await Product.create({
            meal: req.body.meal,
            price: req.body.price,
        });

        return res.json({ meal: newPlato.meal, price: newPlato.price, message: 'Plato ingresado con éxito.' });
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
});

module.exports = route;