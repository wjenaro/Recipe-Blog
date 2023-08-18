const mongoose = require('mongoose');
const url = "mongodb://0.0.0.0:27017/recipeDB";

// Define the MongoDB connection options (optional)
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Function to connect to the database
async function connectDB() {
  try {
    await mongoose.connect(url, options);
    console.log("Database connected");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
}

connectDB();

// If you want to define models, you can do it here

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected to MongoDB');
// });

// If you have models defined in separate files, you can require them here
// models
require('./Category');
