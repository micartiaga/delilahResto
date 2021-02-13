const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection-DB');

class Product extends Model { }
Product.init({
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
    sequelize,
    modelName: 'Product',
    tableName: 'Menu',
});

module.exports = Product;