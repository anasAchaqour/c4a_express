// Import the Mongoose library
const mongoose = require("mongoose");
// Extract the Schema class from Mongoose
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const articleSchema = new Schema({
  userName: String,
});

// Create a model based on that schema
const Mydata = mongoose.model("Mydataa", articleSchema);

// export the model
module.exports = Mydata;