const express = require('express');
const router = express.Router();

router.get("/", async (req, res)=>{
    res.send("Buenas soy pedidos");
});

module.exports = router;