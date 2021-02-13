const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection-DB');

class OrdersAndMeals extends Model { }
OrdersAndMeals.init({
    // Model attributes are defined here
    // orderId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
       
    // },
    // productId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    
}, {
    // Other model options go here
    sequelize,
    // We need to pass the connection instance
    modelName: 'OrdersAndMeals',
    // We need to choose the model name
    tableName: 'OrdersAndMeals',
});

module.exports = OrdersAndMeals;