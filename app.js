const mongoose = require("mongoose");

//Connecting to server
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Create schema of document
const fruitSchema = new mongoose.Schema({
  //making name field required
  name: {
    type: String,
    required: [true, "Please check your entry. No name specified."],
  },
  //adding validation to score field
  score: {
    type: Number,
    min: 1,
    max: 10,
  },
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
// fruit.save();

//Same thing, different collection
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,

  //making relations between different collections
  favouriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Praneet Karna",
  age: 19,
  favouriteFruit: kiwi,
});

// saving person
// person.save();

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

// Fruit.insertMany([kiwi, banana, blueberry], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Success");
//   }
// });

//Reading the database
Fruit.find(function (err, fruits) {
  if (err) console.log(err);
  else {
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});

//Updating one
// Fruit.updateOne({ name: "Apple" }, { name: "Peach" }, function (err) {
//   if (err) console.log(err);
//   else console.log("Successfully updated");
// });

// Updating many
// Fruit.updateMany({ name: "Apple" }, { name: "Strawberry" }, function (err) {
//   if (err) console.log(err);
//   else console.log("Successfully updated");
// });

//Deleting one
// Fruit.deleteOne({ name: "Peach" }, function (err) {
//   if (err) console.log(err);
//   else console.log("Successfully deleted");
// });

// Deleting many
// Person.deleteMany({ age: 19 }, function (err) {
//   if (err) console.log(err);
//   else console.log("success");
// });

//Challenge - Add new fruit and update praneet's fav fruit to that

// const litchi = new Fruit({
//   name: "Litchi",
//   score: "10",
//   review: "Best fruit ever.",
// });

// litchi.save();

// Person.updateOne(
//   { name: "Praneet Karna" },
//   { favouriteFruit: litchi },
//   function (err) {
//     if (err) console.log(err);
//     else console.log("Changed fruit");
//   }
// );

//Closing the connection in the last function
mongoose.connection.close();
