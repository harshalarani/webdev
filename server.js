const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://harshalarani7:EJsiKJe7BXcpoRjB@cluster0.ds1kk0p.mongodb.net/mybatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Create a schema for the user
const userSchema = new mongoose.Schema({
  usn: { type: String, required: true },
  name: { type: String, required: true },
  semester: { type: String, required: true },
  branch: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

app.use(express.json());
app.use(cors());

// Signup route
app.post('/signup', async (req, res) => {
  try {
    // Extract the user data from the request body
    const { usn, name, semester, branch, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user document
    const newUser = new User({
      usn,
      name,
      semester,
      branch,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Change password route
app.post('/password_change', async (req, res) => {
  try {
    // Extract the user data from the request body
    const { email, oldPassword, newPassword } = req.body;

    // Find the user with the provided email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the old password matches
    const passwordMatch = await bcrypt.compare(oldPassword, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid old password' });
    }

    // Hash the new password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Profile route
app.get('/api/profile', async (req, res) => {
  try {
    // Assuming you want to fetch the profile data for a specific user, you can pass the user's email as a query parameter
    const { usn } = req.query;

    // Find the user with the provided email
    const user = await User.findOne({ usn });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return the user's profile data
    const profileData = {
      name: user.name,
      usn: user.usn,
      sem: user.semester,
      department: user.branch,
    };

    res.json(profileData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(8080, () => {
  console.log('Server started on http://localhost:8080');
});
