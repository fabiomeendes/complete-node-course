const express = require('express');
require('./db/mongoose')

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   // if (req.method === 'POST' || req.method === 'GET' || req.method === 'PATCH' || req.method === 'DELETE') {
//   res.status(503).send('MAINTENANCE SERVER')
//   // } else {
//   //   next();
//   // }
// })

const multer = require('multer');
const upload = multer({
  dest: 'images'
});
app.post('/upload', upload.single(), (req, res) => {
  res.send();
});

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on ${port} port`);
});

const Task = require('./models/task');
const User = require('./models/user');

const myFunction = async () => {
  // const task = await Task.findById('5d3efe86903398086ce64e9c');
  // await task.populate('owner').execPopulate();
  // console.log(task);

  const user = await User.findById('5d3efe6c903398086ce64e9a');
  await user.populate('usertasks').execPopulate();
  console.log(user.usertasks);
}

// myFunction();