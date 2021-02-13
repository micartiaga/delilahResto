const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection-DB');

class OrdersAndMeals extends Model { }
OrdersAndMeals.init({
    // orderId: {
    //     type: DataTypes.INTEGER,
    // },
    // productId: {
    //     type: DataTypes.INTEGER,  
    // },

}, {
    sequelize,
    modelName: 'OrdersAndMeals',
    tableName: 'OrdersAndMeals',
});

module.exports = OrdersAndMeals;