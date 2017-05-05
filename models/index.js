//const Sequelize = require('sequelize');
const db = require('./db');
const Place = require('./place');
const Hotel = require('./hotel');
const Activity = require('./activity');
const Restaurant = require('./restaurant');

/*
// Do model stuff here
const db = new Sequelize('postgres://localhost:5432/trip_planner', {
  logging: false
});
*/

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);
