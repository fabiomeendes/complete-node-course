const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
  console.log('Please provide an address');
} else {
  geocode('Osasco, Sao Paulo, Brazil', (error, data) => {
    if (error) {
      return console.log(error, 'error');
    }
    forecast(data.lat, data.lon, (error, forecastData) => {
      if (error) {
        return console.log(error, 'error');
      }
      console.log(data.location);
      console.log(forecastData);
    });    
  });
}



