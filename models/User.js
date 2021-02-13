const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection-DB');

class User extends Model { }
User.init({
    
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
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
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
    tableName: 'Usuarios',
});

module.exports = User;
