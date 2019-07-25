const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZmJvNjIxIiwiYSI6ImNqeWE4NWhpYTBjN2EzY2xoYTVobTA3Z20ifQ.XsNUskVE0PUe3EOM8Rj1YA`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to access the mapbox service!', undefined);
    } else if (body.features.length === 0) {
      callback('Unable to find the location!', undefined);
    } else {
      callback(undefined, {
        lat: body.features[0].center[1],
        lon: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  }); 
}

module.exports = geocode;