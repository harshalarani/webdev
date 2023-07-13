// const express = require('express');
// const { MongoClient } = require('mongodb');

// const app = express();
// const port = 3002; // Set the desired port number

// // MongoDB connection URI
// const uri = "mongodb+srv://canjeeka:<jc0vNmcIAOyB3xGr>@cluster0.jwh1lfj.mongodb.net/?retryWrites=true&w=majority";
// // Update with your MongoDB connection string
// const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });    console.log('User:', user);
//     console.log('Semester:', sem);
//     console.log('Branch:', branch);
//     console.log('Email:', email);

//   // Connect to the MongoDB database
//   client.connect((err) => {
//     if (err) {
//       console.error('Failed to connect to the database:', err);
//       return;
//     }

//     console.log('Connected to the database');

//     const db = client.db('new'); // Specify the name of your database
//     const collection = db.collection('trial'); // Specify the name of your collection

//     // Create a new document with the extracted data
//     const newDocument = {
//       usn,
//       user,
//       sem,
//       branch,
//       email
//     };

//     // Insert the document into the collection
//     collection.insertOne(newDocument, (err, result) => {
//       if (err) {
//         console.error('Failed to insert document:', err);
//         return;
//       }

//       console.log('Document inserted successfully');
//       console.log(result.ops); // Newly inserted document

//       // Send a response back to the frontend
//       res.json({ message: 'Signup successful' });

//       // Close the database connection
//       client.close();
//     });
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://harshalarani7:EJsiKJe7BXcpoRjB@cluster0.ds1kk0p.mongodb.net/mydatabase?retryWrites=true&w=majority', {
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
  username: { type: String, required: true },
  password: { type: String, required: true },
},

    { collection: 'User' } 
);

const User = mongoose.model('User', userSchema);

app.use(express.json());
app.use(cors());

// Signup route
app.get('/', async (req, res) => {
    return res.status(200).json({ error: 'blehhh' });


})
app.post('/login', async (req, res) => {
    console.log(req.body)
  try {
    const { usn, name, semester, branch, email } = req.body;


    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }
    const password = usn;
    const username = usn;
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      usn,
      name,
      semester,
      branch,
      email,
      username,
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

// Login route
app.post('/login?', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid Username or Password' });
    }

    // Compare the provided password with the stored password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(8080, () => {
  console.log('Server started on http://localhost:8080');
});