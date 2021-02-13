const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection-DB');

class Token extends Model { }
Token.init({
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, 
{
    sequelize,
    modelName: 'Token',
    tableName: 'tokens',
});

module.exports = Token;