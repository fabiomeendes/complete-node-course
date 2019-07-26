const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
});

// const User = mongoose.model('User', {
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error('Use a positive number');
//       }
//     }
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error('Email is invalid');
//       }
//     }
//   },
//   password: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 7,
//     validate(value) {
//       if (value.toLowerCase().includes('password')) {
//         throw new Error('Your password cannot contain "password"');
//       }
//     }
//   }
// });

// const me = new User({
//   name: 'Fabio    ',
//   email: '   faf@dDADADAD.com  ',
//   password: 'phone567!'
// });

// me.save().then(result => {
//   console.log(`${me.name} has been saved!`, me);
// }).catch(e => {
//   console.log(e);
// });

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  }
});

const task = new Task({
  description: '  Learn everything about Mongo  ',
});

task.save().then(result => {
  console.log(task);
}).catch(e => {
  console.log(e);
});

