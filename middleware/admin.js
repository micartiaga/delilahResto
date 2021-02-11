const User = require('../../models/User');

const isAdmin = async (req, res, next) => {
   
     try {
         // VALIDANDO SI EXISTE EL USUARIO
        let username = req.body.username;
        let usuario = await User.findOne({ where: {username: username }});
        if (!usuario) {
            return res.status(404).send({ Error: error.message })
        }

        // CHEQUEANDO SI ES ADMIN
        if (usuario.dataValues.admin){
            next();
        }else{
            res.status(403).send(`Necesitas ser admin para acceder`)
        }

     }
     catch (err) {
         res.status(403).send(err.message)
     }
};

module.exports = { isAdmin };