require('dotenv/config');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(`mysql://${process.env.USER}:${process.env.PASS}@${process.env.HOST}:3306/${process.env.SCHEMA}`);
// db://user:password@servidor:puerto/schema

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } 
  catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;

