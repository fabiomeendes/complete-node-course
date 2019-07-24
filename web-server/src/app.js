const express = require('express');
const path = require('path');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App!',
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
  });
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