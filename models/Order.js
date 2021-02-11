const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection-DB');

class Order extends Model { }
Order.init({
    // Model attributes are defined here
    order_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    paid_method: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,    
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
}, {
    // Other model options go here
    sequelize,
    // We need to pass the connection instance
    modelName: 'Order',
    // We need to choose the model name
    tableName: 'pedidos',
});

module.exports = Order;
