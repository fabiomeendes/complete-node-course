const request = require('request');

const forecast = (lat, lon, callback) => {
  const url = `https://api.darksky.net/forecast/20a2f27a213aa1fe82fa41dcfb5ccb3e/${lat},${lon}?units=si&lang=pt`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to access the weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find the location!', undefined);
    } else {
      callback(undefined, `${body.daily.data[0].summary}${body.currently.temperature} degrees celsius`);
    }
  });
}

module.exports = forecast;