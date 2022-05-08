const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const url = 'mongodb://172.16.0.1:27017';
const client = new MongoClient(url);

await connect();
const collection = await getCollection('a');

// db name?
async function connect() {
  try {
    await client.connect();
  }
  catch(e){
    console.error('Failed connecting to DB: ', e);
  }
}

module.exports = {
  connect,
  ObjectId,
}