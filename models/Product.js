const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection-DB');

class Product extends Model { }
Product.init({
    // Model attributes are defined here
    // product_id: {
    //     type: DataTypes.INTEGER,
    //     autoIncrement: true,
    //     primaryKey: true
    // },
    meal: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    
}, {
    // Other model options go here
    sequelize,
    // We need to pass the connection instance
    modelName: 'Product',
    // We need to choose the model name
    tableName: 'menu',
});

module.exports = Product;