require('dotenv/config');
const express = require('express');
const route = express.Router();
const User = require('../../models/User');
const Order = require('../../models/Order');

route.delete("/", async (req, res) => {

    try {
        let username = req.body.username;
        let usuario = await User.findOne({ where: { username: username } });

        // VALIDANDO SI EXISTE EL USUARIO

        if (!usuario) {
            return res.status(404).send({ Error: error.message })
        };

        let orderId = req.body.order_id;
        let pedido = await Order.findOne({ where: { id: orderId } });

        if (!pedido) {
            return res.status(404).send('El pedido no existe.');
        }

        pedido.destroy();
        return res.status(200).send('El pedido fue rechazado y eliminado.');

    }
    catch (error) {
        console.log(error);
        return res.status(404).send('Ha habido un error, no se puede eliminar su pedido.')
    }
});

module.exports = route;
