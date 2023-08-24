const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'mi_tienda.sqlite',
});

module.exports = sequelize;