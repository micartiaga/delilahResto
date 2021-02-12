const express = require('express');
const route = express.Router();
const Product = require('../../models/Product');


route.get("/", async (req, res) => {

    try {
        const platos = await Product.findAll({
            attributes: {
                exclude: ['product_id', 'createdAt', 'updatedAt']
            }
        });

       return res.json(platos);
       
    }
    catch (err) {
       return res.sendStatus(404);
    }
});


module.exports = route;