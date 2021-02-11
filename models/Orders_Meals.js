const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection-DB');

class Order_meal extends Model { }
Order_meal.init({
    // Model attributes are defined here
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false
       
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
}, {
    // Other model options go here
    sequelize,
    // We need to pass the connection instance
    modelName: 'Order_meal',
    // We need to choose the model name
    tableName: 'Pedidos_Platos',
});

module.exports = Order_meal;