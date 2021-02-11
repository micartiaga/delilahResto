require('dotenv/config');
require('./database/connection-DB');
require('./asociations');
require('./database/migrations');
const express = require('express');
const bodyParser = require('body-parser');
const app= express();
const port = process.env.PORT || 3000;
const cors= require('cors');
const jwt = require('jsonwebtoken');


const UsersRoute = require('./routes/users');
const ProductsRoute = require('./routes/products');
const OrdersRoute = require('./routes/orders');

app.use(cors());
app.use(bodyParser.json());
app.use('/usuarios', UsersRoute);
app.use('/pedidos', OrdersRoute);
app.use('/menu', ProductsRoute);

app.get("/", (req, res)=>{
    res.send("Buenas");
});

app.listen(port, ()=>{
    console.log(`Escuchando desde ${port}`);
});