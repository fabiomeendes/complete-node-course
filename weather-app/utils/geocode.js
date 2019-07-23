const request = require('request');

const geocode = (address, callback) => {
  const geoCodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZmJvNjIxIiwiYSI6ImNqeWE4NWhpYTBjN2EzY2xoYTVobTA3Z20ifQ.XsNUskVE0PUe3EOM8Rj1YA`;
  request({ url: geoCodeURL, json: true }, (error, response) => {
    if (error) {
      callback('Unable to access the mapbox service!');
    } else if (response.body.features.length === 0) {
      callback('Unable to find the location!');
    } else {
      callback(undefined, {
        lat: response.body.features[0].center[1],
        lon: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  }); 
}

module.exports = geocode;