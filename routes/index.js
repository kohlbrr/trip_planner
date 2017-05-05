const express = require('express');
const router = express.Router();
const models = require('../models');
const Hotel = models.Hotel;
const Restaurant = models.Restaurant;
const Activity = models.Activity;

router.get('/', (req, res, next) => {
  let renderValues = {};
  Hotel.findAll({})
  .then((hotels) => {
    renderValues.hotels = hotels;
    return Restaurant.findAll({});
  })
  .then((restaurants) => {
    renderValues.restaurants = restaurants;
    return Activity.findAll({});
  })
  .then((activities) => {
    renderValues.activities = activities;
    res.render('index', renderValues);
  })
  .catch((err) => {
    console.error(err);
  });
})

module.exports = router;
