const Sequelize = require('sequelize');
const db = require('./db');

const Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.FLOAT,
    validate: {
      min: 1,
      max: 5
    },
    allowNull: true
  },
  ammenities: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

module.exports = Hotel;
