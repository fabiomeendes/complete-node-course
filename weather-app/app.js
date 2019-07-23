const geocode = require('./utils/geocode');

// const url = 'https://api.darksky.net/forecast/20a2f27a213aa1fe82fa41dcfb5ccb3e/-23.5506984,-46.7743679?units=si&lang=pt';

// request({ url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to access the weather service!');
//   } else if (response.body.error) {
//     console.log('Unable to find the location!');
//   } else {
//     console.log(`${response.body.daily.data[0].summary} - ${response.body.currently.temperature}`);
//   }
// });

// const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/osasco.json?access_token=pk.eyJ1IjoiZmJvNjIxIiwiYSI6ImNqeWE4NWhpYTBjN2EzY2xoYTVobTA3Z20ifQ.XsNUskVE0PUe3EOM8Rj1YA';

// request({ url: geoCodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to access the mapbox service!');
//   } else if (response.body.features.length === 0) {
//     console.log('Unable to find the location!');
//   } else {
//     const lat = response.body.features[0].center[1];
//     const lon = response.body.features[0].center[0];
//     console.log(lat, lon);
//   }
// });

geocode('Osasco, Sao Paulo, Brazil', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});

