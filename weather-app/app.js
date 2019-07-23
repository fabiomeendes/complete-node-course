const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
  console.log('Please provide an address');
} else {
  geocode('Osasco, Sao Paulo, Brazil', (error, { lat, lon, location }) => {
    if (error) {
      return console.log(error, 'error');
    }
    forecast(lat, lon, (error, forecastData) => {
      if (error) {
        return console.log(error, 'error');
      }
      console.log(location);
      console.log(forecastData);
    });    
  });
}



