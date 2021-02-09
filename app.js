require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');
const app= express();
const port = process.env.PORT || 3000;
const cors= require('cors');

const UsersRoute = require('./routes/users');
const ProductsRoute = require('./routes/products');
const OrdersRoute = require('./routes/orders');

app.use('/usuarios', UsersRoute);
app.use('/pedidos', OrdersRoute);
app.use('/menu', ProductsRoute);

app.get("/", (req, res)=>{
    res.send("Buenas");
});

app.listen(port, ()=>{
    console.log(`Escuchando desde ${port}`);
});