const express = require('express');
const route = express.Router();
const User = require('../../models/User');

route.get("/", async (req, res)=>{

    try{
            const users = await User.findAll({
                attributes:{
                    exclude: ['password', 'id', 'admin', 'createdAt', 'updatedAt']
                }
            });
        
            return res.json({users: users});
    }
    catch(err){
       return res.sendStatus(404);
    }
});

module.exports = route;