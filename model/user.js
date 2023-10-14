const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // You can add more fields to the user schema as needed (e.g., email, name, etc.).
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
