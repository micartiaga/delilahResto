const express = require('express');
const route = express.Router();
const Order = require('../../models/Order');


route.put("/", async (req, res) => {
    try {
        // VALIDAR QUE EXISTA EL PEDIDO
        const pedido = await Order.findOne({ where: { id: req.body.orderId } })
        if (!pedido) {
            return res.status(404).send(`No se encontró el pedido`)
        };

        // PEDIR LA INFO QUE VA A EDITAR
        if (!req.body.state) {
            return res.status(404).send("Agregar estado para editar.")
        };

        pedido.state = req.body.state;

        await pedido.save({ fields: ["state"] });
        await pedido.reload();

        return res.status(201).send("Estado del pedido actualizado con éxito");
    }

    catch (error) {
        console.log(error);
        return res.sendStatus(404);
    }

});

module.exports = route;