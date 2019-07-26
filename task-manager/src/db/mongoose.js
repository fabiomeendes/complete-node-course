const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
});

// const User = mongoose.model('User', {
//   name: {
//     type: String,
//     required: true
//   },
//   age: {
//     type: Number,
//     required: true
//   }
// });

// const me = new User({
//   name: 'Fabio',
//   age: 20,
// });

// me.save().then(result => {
//   console.log(`${me.name} Saved!`);
// }).catch(e => {
//   console.log(e);
// });

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }
});

const task = new Task({
  description: 'Learn everything about Node',
  completed: false,
});

task.save().then(result => {
  console.log(task);
}).catch(e => {
  console.log(e);
});

