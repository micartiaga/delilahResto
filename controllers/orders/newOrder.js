const express = require('express');
const route = express.Router();
const Order = require('../../models/Order');
const User = require('../../models/User');
const Product = require('../../models/Product');

route.post("/", async (req, res) => {
    // input req.body.username / req.body.platos  / req.body.paidMethod
    try {
        const usuario = await User.findOne({ where: { username: req.body.username } });

        
        if (!req.body.platos) {
            return res.status(404).send("Agregue platos a su pedido.")
        };
        
        
        if (!req.body.paidMethod) {
            return res.status(404).send("Agregue un método de pago.")
        };
        
        let platos = await Product.findAll({ where: { meal: req.body.platos } });
        
        let orderPrice = 0;
        
         for (let i = 0; i < platos.length; i++) {
            let mealPrice = platos[i].price;
             orderPrice += mealPrice;
          }

        console.log(orderPrice);

        const pedido = await Order.create({
            paidMethod: req.body.paidMethod,
            totalPrice: orderPrice
        });

        console.log("Es es el precio total  " + pedido.totalPrice);

        pedido.addProducts(platos);
        usuario.addOrders(pedido);

        return res.json({ paidMethod: pedido.paidMethod, totalPrice: pedido.totalPrice, message: "Orden creada con éxito." });
    }
    catch (error) {
        console.log(error);
        return res.status(400).send("No puede crear una orden")
    }
});

module.exports = route;