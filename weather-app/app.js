const request = require('request');

const url = 'https://api.darksky.net/forecast/20a2f27a213aa1fe82fa41dcfb5ccb3e/37.8267,-122.4233';

request({ url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.currently);
});