require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('5d3b40f5266b762714303c4b', { age: 1 }).then(user => {
  console.log(user);
  return User.countDocuments({ age: 1 });
}).then(count => {
  console.log(count);
})
.catch(e => {
  console.log(e);
});