const request = require('request');

// const url = 'https://api.darksky.net/forecast/20a2f27a213aa1fe82fa41dcfb5ccb3e/-23.5506984,-46.7743679?units=si&lang=pt';

// request({ url, json: true }, (error, response) => {
//   console.log(`${response.body.daily.data[0].summary} - ${response.body.currently.temperature}`);
// });


const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZmJvNjIxIiwiYSI6ImNqeWE4NWhpYTBjN2EzY2xoYTVobTA3Z20ifQ.XsNUskVE0PUe3EOM8Rj1YA';

request({ url: geoCodeURL, json: true }, (error, response) => {
  const lat = response.body.features[0].center[1];
  const lon = response.body.features[0].center[0];
  console.log(lat, lon);
});