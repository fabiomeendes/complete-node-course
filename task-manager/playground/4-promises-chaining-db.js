require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('5d3b41eb9299f93f108bb851').then(task => {
  console.log(task, 'result');
  return Task.countDocuments({ completed: false });
}).then(count => {
  console.log(count, 'count');
}).catch(e => {
  console.log(e, 'e');
});