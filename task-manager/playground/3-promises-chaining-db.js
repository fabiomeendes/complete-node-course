require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('5d3b40f5266b762714303c4b', { age: 1 }).then(user => {
//   console.log(user);
//   return User.countDocuments({ age: 1 });
// }).then(count => {
//   console.log(count);
// })
// .catch(e => {
//   console.log(e);
// });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount('5d3b4169432b8e2b68b2edaa', 2).then(count => {
  console.log(count, 'count');
}).catch(e => {
  console.log(e, 'e');
});