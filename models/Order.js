const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection-DB');

class Order extends Model { }
Order.init({
    // Model attributes are defined here
    // order_id: {
    //     type: DataTypes.INTEGER,
    //     autoIncrement: true,
    //     primaryKey: true
    // },
    paid_method: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: "NUEVO"
    },
    total_price: {
        type: DataTypes.INTEGER
    }

    
}, {
    // Other model options go here
    sequelize,
    // We need to pass the connection instance
    modelName: 'Order',
    // We need to choose the model name
    tableName: 'Orders',
});

module.exports = Order;
