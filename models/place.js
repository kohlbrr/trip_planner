const Sequelize = require('sequelize');
const db = require('./db');

const Place = db.define('place', {
  address: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: true
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.DOUBLE), // Can we set the length?
    defaultValue: [0.0, 0.0],
    allowNull: false
  }
})

module.exports = Place;
