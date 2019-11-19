var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {weather: null, error: null});
});

router.post('/', function(req, res, next) {
  let city = req.body.city;
  console.error('city is...' + city + '<<');
  console.log('city is...' + city + '...');
  let url = config.url;
  console.log('**url is...' + url);

  request(url, function(err, response, body) {
    if(err) {
      console.error('There was an error trying to lookup weather data for ' + city + '.');
      res.render('index', {weather: null, error: 'Error, please try again!'});
    } else {
      let weather = JSON.parse(body);

      if(weather.main == undefined) {
        console.error('No weather data was avalable for ' + city + '.');
        console.log('no weather available for ' + city + '...');
        res.render('index', {weather: null, error: 'Error, please try again!'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log("Found weather data for " + city + '.');
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
});

module.exports = router;
