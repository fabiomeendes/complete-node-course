const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Osasco, Sao Paulo, Brazil', (error, data) => {
  console.log(error, 'error');
  console.log(data, 'data', );
});

forecast(-23.5325, -46.7917, (error, data) => {
  console.log(error, 'error');
  console.log(data, 'data');
});
