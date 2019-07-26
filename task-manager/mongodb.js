// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database.', error);
  }

  const db = client.db(databaseName);

  // db.collection('users').updateOne({
  //   _id: new ObjectID('5d3b05396c3de820941f9f8b'),
  // }, {
  //   $set: {
  //     name: 'Mike1',
  //   },
  //   $inc: {
  //     age: -1
  //   }
  // }).then(result => {
  //   console.log(result);
  // }).catch(e => {
  //   console.log(e);
  // });

  db.collection('tasks').updateMany({
    completed: false
  },{
      $set: {
        completed: true,
      },
    }).then(result => {
      console.log(result.modifiedCount);
    }).catch(e => {
      console.log(e);
    });
});