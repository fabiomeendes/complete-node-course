const express = require('express');
const path = require('path');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.get('/weather', (req, res) => {
  res.send({
    location: 'Philadelphia',
    forecast: 'Snow',
  });
});

app.listen(3000, () => {
  console.log('Server listening on 3000 port!');
});