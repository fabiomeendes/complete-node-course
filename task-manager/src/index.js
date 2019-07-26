const express = require('express');
require('./db/mongoose')
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
  const user = new User(req.body);
  user.save().then(result => {
    res.status(201).send(user);
  }).catch(e => {
    res.status(400).send({
      errorMessage: e.message,
      errorComplete: e
    });
  });
});

app.post('/tasks', (req, res) => {
  const user = new Task(req.body);
  user.save().then(result => {
    res.status(201).send(user);
  }).catch(e => {
    res.status(400).send({
      errorMessage: e.message,
      errorComplete: e
    });
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});