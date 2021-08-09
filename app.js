const mongoose = require("mongoose");

//Connecting to server
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Create schema of document
const fruitSchema = new mongoose.Schema({
  name: String,
  score: Number,
  review: String,
});

//Define a model(capital letters) for the schema
const Fruit = mongoose.model("Fruit", fruitSchema);

//Create a new document(small letters)
const fruit = new Fruit({
  name: "Apple",
  score: 7,
  review: "Solid fruit.",
});

//Save instance
fruit.save();

//Same thing, different collection
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Praneet Karna",
  age: 19,
});

person.save();

//Adding many documents at once

const kiwi = new Fruit({
  name: "Kiwi",
  score: "8",
  review: "Pretty good.",
});

const banana = new Fruit({
  name: "Banana",
  score: "7",
  review: "Convinient.",
});

const blueberry = new Fruit({
  name: "Blueberry",
  score: "9",
  review: "Very fancy.",
});

Fruit.insertMany([kiwi, banana, blueberry], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Success");
  }
});

// const insertDocuments = function (db, callback) {
//   // Get the documents collection
//   const collection = db.collection("documents");
//   // Insert some documents
//   collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }], function (err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// };

// const findDocuments = function (db, callback) {
//   // Get the documents collection
//   const collection = db.collection("documents");
//   // Find some documents
//   collection.find({}).toArray(function (err, docs) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(docs);
//     callback(docs);
//   });
// };
