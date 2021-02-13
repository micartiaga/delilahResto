const express = require('express');
const route = express.Router();
const Order = require('../../models/Order');
const User = require('../../models/User');
const Product = require('../../models/Product');

route.post("/", async (req, res) => {
    // input req.body.username / req.body.platos  / req.body.paid_method
    try {
        const usuario = await User.findOne({ where: { username: req.body.username } });
    
        if (!req.body.platos) {
            return res.status(404).send("Agregue platos a su pedido.")
        };



        if (!req.body.paid_method) {
            return res.status(404).send("Agregue un método de pago.")
        };

        
        let platos = await Product.findAll({ where: { meal: req.body.platos } });
    
        let totalPrice = 0;
        let mealPrice = platos.price;
        
        for (let i=0; i<platos.length; i++){
            totalPrice += mealPrice;
        }
        
        const pedido = await Order.create({
            paid_method: req.body.paid_method,
            total_price: totalPrice
        });


        console.log(totalPrice);

        pedido.addProducts(platos);
        usuario.addPedidos(pedido);

        return res.json({ paid_method: pedido.paid_method, total_price: pedido.total_price, message: "Orden creada con éxito." });

    }
    catch (error) {
        console.log(error);
        return res.status(400).send("No puede crear una orden")
    }
});

module.exports = route;