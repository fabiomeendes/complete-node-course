require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5d3b41eb9299f93f108bb851').then(task => {
//   console.log(task, 'result');
//   return Task.countDocuments({ completed: false });
// }).then(count => {
//   console.log(count, 'count');
// }).catch(e => {
//   console.log(e, 'e');
// });

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  return await Task.countDocuments({ completed: false });
};

deleteTaskAndCount('5d3b51d69a2f1103501f6d61').then(count => {
  console.log(count);
}).catch(e => {
  console.log(e);
});