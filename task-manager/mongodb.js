// CRUD create read update delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database.', error);
  }

  const db = client.db(databaseName);
  // db.collection('users').insertOne({
  //   name: 'Fábio',
  //   age: 20,
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user.');
  //   }
  //   console.log(result.ops);
  // });

  // db.collection('users').insertMany([
  //   {
  //     name: 'Jen',
  //     age: 21,
  //   }, 
  //   {
  //     name: 'Gunther',
  //     age: 23,
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert users.');
  //   }
  //   console.log(result.ops);
  // });

  db.collection('tasks').insertMany([
    {
      description: 'Remove trash from computer',
      completed: true,
    },
    {
      description: 'Clean the bedroom',
      completed: false,
    },
    {
      description: 'Sign the docs',
      completed: false,
    }
  ], (error, result) => {
    if (error) {
      return console.log('Unable to insert users.');
    }
    console.log(result.ops);
  });
})