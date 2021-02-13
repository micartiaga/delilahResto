const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection-DB');

class Order extends Model { }
Order.init({
    paidMethod: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: "NUEVO"
    },
    totalPrice: {
        type: DataTypes.INTEGER
    }
},
    {
        sequelize,
        modelName: 'Order',
        tableName: 'Orders',
    });

module.exports = Order;
