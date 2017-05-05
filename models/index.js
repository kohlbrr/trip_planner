const db = require('./db');
const Place = require('./place');
const Hotel = require('./hotel');
const Activity = require('./activity');
const Restaurant = require('./restaurant');

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

//module.exports = db;
module.exports = {
  Place: Place,
  Hotel: Hotel,
  Activity: Activity,
  Restaurant: Restaurant
};
