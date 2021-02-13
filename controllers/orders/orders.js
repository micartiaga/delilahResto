const express = require('express');
const route = express.Router();
const Order = require('../../models/Order');
const Product = require('../../models/Product');
const User = require('../../models/User');

route.get("/", async (req, res) => {
    try {
        const orders = await Order.findAll(
            {
                include: [
                    { model: Product, attributes: ['meal', 'price'] },
                    { model: User, attributes: ['fullname', 'adress'] }
                ],
                attributes: ['id', 'paidMethod', 'createdAt', 'state', 'totalPrice']
            });

        return res.json(orders);
    }
    catch (error) {
        console.log(error)
        return res.sendStatus(404);
    }
});

module.exports = route;

