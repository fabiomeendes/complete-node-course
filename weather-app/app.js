const request = require('request');

const url = 'https://api.darksky.net/forecast/20a2f27a213aa1fe82fa41dcfb5ccb3e/-23.5506984,-46.7743679?units=si&lang=pt';

request({ url, json: true }, (error, response) => {
  console.log(`${response.body.daily.data[0].summary} - ${response.body.currently.temperature}`);
});