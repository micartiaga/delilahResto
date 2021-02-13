require('dotenv/config');
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) { return res.sendStatus(401) }

        jwt.verify(token, process.env.TOKEN, (err, user) => {
            if (err) {
                return res.sendStatus(403)
            }
            req.user = user;
            next()
        })
    }
    catch (error) {
        console.log(error)
        res.status(403).send(error.message)
    }
};

module.exports = { auth };