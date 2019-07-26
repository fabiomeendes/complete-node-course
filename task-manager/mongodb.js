// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database.', error);
  }

  const db = client.db(databaseName);

  db.collection('users').deleteMany({
    age: 20
  }).then(result => {
    console.log('Deleted!');
  }).catch(e => {
    console.log('Error!');
  });

  db.collection('tasks').deleteOne({
    description: 'Clean the bedroom'
  }).then(result => {
    console.log('Deleted!');
  }).catch(e => {
    console.log('Error!');
  });

});