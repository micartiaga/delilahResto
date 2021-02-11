const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection-DB');

class Product extends Model { }
Product.init({
    // Model attributes are defined here
    product_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    meal: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT(10),
        allowNull: false,
        validate:{
            isNumeric: true
        }       
    },
    
}, {
    // Other model options go here
    sequelize,
    // We need to pass the connection instance
    modelName: 'Product',
    // We need to choose the model name
    tableName: 'menu',
});

// Crear la tabla "usuarios" en la base de datos, si no existe
// User.sync({ force: false })

module.exports = Product;
