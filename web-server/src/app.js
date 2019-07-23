const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
  res.send([{
    name: 'Fabio',
  },{
    name: 'Andrew',
  }]);
});

app.get('/about', (req, res) => {
  res.send('<h1>About page!</h1>');
});

app.get('/weather', (req, res) => {
  res.send({
    location: 'Philadelphia',
    forecast: 'Snow',
  });
});

app.listen(3000, () => {
  console.log('Server listening on 3000 port!');
});