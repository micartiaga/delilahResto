const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection-DB');

class User extends Model { }
User.init({
    // Model attributes are defined here
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
    },
    fullname: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    phone: {
        type: DataTypes.INTEGER(30),
        allowNull: false,
        validate:{
            isNumeric: true
        }       
    },
    adress: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    admin: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    
}, {
    // Other model options go here
    sequelize,
    // We need to pass the connection instance
    modelName: 'User',
    // We need to choose the model name
    tableName: 'usuarios',
});

// Crear la tabla "usuarios" en la base de datos, si no existe
// User.sync({ force: false })

module.exports = User;
