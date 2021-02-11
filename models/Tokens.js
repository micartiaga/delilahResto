const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection-DB');

class Token extends Model { }
Token.init({
    // Model attributes are defined here
    token: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    
}, {
    // Other model options go here
    sequelize,
    // We need to pass the connection instance
    modelName: 'Token',
    // We need to choose the model name
    tableName: 'tokens',
});

// Crear la tabla "usuarios" en la base de datos, si no existe
// Product.sync({ force: false })

module.exports = Token;