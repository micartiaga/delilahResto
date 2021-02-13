const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection-DB');

class Orders_Meals extends Model { }
Orders_Meals.init({
    // Model attributes are defined here
    // order_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
       
    // },
    // product_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    
}, {
    // Other model options go here
    sequelize,
    // We need to pass the connection instance
    modelName: 'Orders_Meals',
    // We need to choose the model name
    tableName: 'Orders_Meals',
});

module.exports = Orders_Meals;