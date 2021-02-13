const express = require('express');
const route = express.Router();
const connection = require('../../database/connection-DB');
const Order = require('../../models/Order');
const User = require('../../models/User');
const Product = require('../../models/Product');
const Orders_Meals = require('../../models/Orders_Meals');




route.get("/", async (req, res) => {

    try {
        let username = req.body.username;
        let usuario = await User.findOne(
            {
                where: {username:username},
                attributes: ["username"],
                include: [
                    {
                        model: Order, 
                        include: [{ model: Product, attributes: ["paid_method", "state", "total_price"]}]
                    }
                ]
            });

            return res.status(200).json(usuario);
      
    }
    catch (error) {
        console.log(error);
        return res.status(404).send("El pedido no existe.")

    }


});

module.exports = route;