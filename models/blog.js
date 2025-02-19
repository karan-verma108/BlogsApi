const mongoose = require('mongoose');

//Creating the structure/schema of our collection
let blogSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
});

//Creating the collection/modal

let Blog = new mongoose.model('Blog', blogSchema); //Collection name will be User and it will follow the structure defined in userSchema

module.exports = Blog;
