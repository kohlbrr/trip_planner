const Sequelize = require('sequelize');
// marked?

// Do model stuff here
const db = new Sequelize('postgres://localhost:5432/trip_planner', {
  logging: false
});
