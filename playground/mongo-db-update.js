// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5ae7ac543bddc548e8fed9b3')
  // }, {
  //   $set: {
  //     completed: true
  //   },
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ae7ae0b3bddc548e8feda6a')
  }, {
    $set: {
      name: 'Mike'
    },
    $inc: {
      age: 1
    },
  }, {
    returnOriginal: false,
  }).then((res) => {
    console.log(res);
  })

  // client.close();
});