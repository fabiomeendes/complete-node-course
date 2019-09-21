const express = require('express');
const Task = require('../models/task');
const auth = require('../middleware/auth');
const router = new express.Router();

router.post('/tasks', auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    owner: req.user._id,
  });
  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send({
      errorMessage: e.message,
      errorComplete: e
    });
  }
});

router.get('/tasks', auth, async (req, res) => {
  const match = {};

  if (req.query.completed) { // STRING
    match.completed = req.query.completed === 'true';
    // if true, match.completed = true, ANYTHING else, false
  }

  try {
    // const tasks = await Task.find();
    // const tasks = await Task.find({ owner: req.user._id });
    await req.user.populate({
      path: 'usertasks',
      match
    }).execPopulate();
    res.status(200).send(req.user.usertasks);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get('/tasks/:id', auth, async (req, res) => {
  const { id: _id } = req.params;
  try {
    // const task = await Task.findById({ _id });
    const task = await Task.findOne({ _id, owner: req.user._id });
    if (!task) {
      return res.status(404).send('Task not found');
    }
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch('/tasks/:id', auth,  async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['description', 'completed'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
  try {
    // const task = await Task.findById(req.params.id);
    const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })
    if (!task) {
      return res.status(404).send('Task not found');
    }
    updates.forEach(update => task[update] = req.body[update]);
    await task.save();
    // const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.status(200).send(task);
  } catch (e) {
    res.status(400).send();
  }
});

router.delete('/tasks/:id', auth, async (req, res) => {
  try {
    // const task = await Task.findByIdAndDelete(req.params.id);
    const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user.id });
    if (!task) {
      res.status(404).send('Task not found');
    }
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;