require('dotenv/config');
const express = require('express');
const route = express.Router();
const jwt = require('jsonwebtoken');


const auth = async (req, res, next) => {
    let username = req.body.username;
    let user = {username: username};
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) {return res.sendStatus(401)}

        jwt.verify(token, process.env.TOKEN, (err, user)=>{
            if(err){
                return res.sendStatus(403)
            }
            req.user = user;
            next()
        })
    }
    catch (error) {
        res.status(403).send(error.message)
    }
};

module.exports = {auth};