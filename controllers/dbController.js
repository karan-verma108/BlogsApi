// controllers/dbController.js
const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URI;
    await mongoose.connect(mongoUrl);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

const getData = async (query) => {
  try {
    const Blog = require('../models/blog');
    let dataFound = await Blog.find(query);
    return dataFound;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

module.exports = { connectToDB, getData };
