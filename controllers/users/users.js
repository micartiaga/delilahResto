const express = require('express');
const route = express.Router();
const User = require('../../models/User');


route.get("/", async (req, res)=>{

    try{
            const users = await User.findAll({
                attributes:{
                    exclude: ['password', 'user_id', 'admin', 'createdAt', 'updatedAt']
                }
            });
        
            res.json({users: users});
    }
    catch(err){
        res.sendStatus(404);
    }
});



module.exports = route;