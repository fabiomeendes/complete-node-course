const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Fábio Camillo',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Fábio Camillo',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'Help Text',
    title: 'Help',
    name: 'Fabio Camillo',
  });
});

app.get('/weather', (req, res) => {
  const { address } = req.query;
  if (!address) {
    return res.send({
      error: 'You must provide an address!'
    });
  }
  geocode(address, (error, { lat, lon, location } = {}) => {
    if (error) {
      return res.send({ error });
    }
    forecast(lat, lon, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }
      return res.send({
        location,
        forecast: forecastData,
      });
    });
  });
});

app.get('/help/*', (req, res) => { // must come first
  res.render('404', {
    title: '404',
    name: 'Fabio Camillo',
    errorMessage: 'Help article not found!',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Fabio Camillo',
    errorMessage: 'Page not found!',
  });
});

app.listen(3000, () => {
  console.log('Server listening on 3000 port!');
});