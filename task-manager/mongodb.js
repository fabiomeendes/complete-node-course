// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database.', error);
  }

  const db = client.db(databaseName);

  // db.collection('users').findOne({ _id: new ObjectID("5d3b06f9a8cd9210f4deb95c") }, (error, user) => {
  //   if (error) {
  //     return console.log('Unable to get the user');
  //   }
  //   console.log(user)
  // });

  // db.collection('users').find({ age: 20 }).toArray((error, users) => {
  //   if (error) {
  //     return console.log('Unable to get the user');
  //   }
  //   console.log(users)
  // });

  // db.collection('users').find({ age: 20 }).count((error, count) => {
  //   if (error) {
  //     return console.log('Unable to get the user');
  //   }
  //   console.log(count)
  // });

  db.collection('tasks').findOne({ _id: new ObjectID("5d3b08de8586b04208bd945a") }, (error, task) => {
    console.log(task._id)
  });

  db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    console.log(tasks)
  });
})