// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const User = require("./model/user");

const port = process.env.PORT || 8000;

// mongo connection
require("./mongo");

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a sample route

// // Signup route
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const post = new User({
    username,
    password,
  });

  await post.save();
  response.send("SignUp successful.");
  //     if (!username || !password) {
  //       return res.status(400).json({ message: 'Username and password are required.' });
  //     }

  //     try {
  //       // Check if the user already exists
  //       const existingUser = await User.findOne({ username });

  //       if (existingUser) {
  //         return res.status(409).json({ message: 'User already exists' });
  //       }
  //     // Hash the password
  //     // const saltRounds = 10;
  //     // const hashedPassword = await bcrypt.hash(password, saltRounds);

  //     const newUser = new User({
  //       username,
  //       password,
  //     });

  //     await newUser.save();

  //     res.status(201).json({ message: 'User created successfully' });
  //   } catch (error) {
  //     console.error('Error during user registration:', error);
  //     res.status(500).json({ message: 'Internal server error' });
  // }
});
app.get("/signup", (req, res) => {
  res.send("hi");
});
app.get("/", (req, res) => {
  res.send("Server is running successfully ");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
