const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const { default: axios } = require("axios");
const app = express();

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://harshalarani7:EJsiKJe7BXcpoRjB@cluster0.ds1kk0p.mongodb.net/mybatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
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

const registerSchema = new mongoose.Schema({
  team_name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  event_selected: { type: String, required: true },
  bio: { type: String },
  website: { type: String },
});

const User = mongoose.model("User", userSchema);

app.use(express.json());
app.use(cors());

const verifyUserLogin = async (email, password) => {
  try {
    const user = await User.findOne({ email }).lean();
    if (!user) {
      return { status: "error", error: "user not found" };
    }
    if (await bcrypt.compare(password, user.password)) {
      // creating a JWT token
      // token = jwt.sign({id:user._id,username:user.email,type:'user'},JWT_SECRET,{ expiresIn: '2h'})
      return { status: "ok" };
    }
    return { status: "error", error: "invalid password" };
  } catch (error) {
    console.log(error);
    return { status: "error", error: "timed out" };
  }
};

// login
app.post("/login", async (req, res) => {
  const { usn, pass } = req.body;
  // we made a function to verify our user login
  const response = await verifyUserLogin(usn, pass);
  if (response.status === "ok") {
    res.status(200).json({ message: "Login Successful" });
    // storing our JWT web token as a cookie in our browser
    // res.cookie("token", token, { maxAge: 2 * 60 * 60 * 1000, httpOnly: true }); // maxAge: 2 hours
    // res.redirect("/");
  } else {
    res.json(response);
  }
});

// Signup route
app.post("/signup", async (req, res) => {
  try {
    // Extract the user data from the request body
    const { usn, name, semester, branch, email } = req.body;

    console.log("req", req.body);

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash("abcdefgh", saltRounds);

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

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// app.get("/cat", async (req, res) => {
//   try {
//     axios
//       .get("https://catfact.ninja/fact")
//       .then((resp) => console.log("res", resp))
//       .then((resp) => res.end(resp));
//   } catch (err) {
//     console.log("err", err);
//   }
// });

app.post("/register_events", async (req, res) => {
  try {
    // const obj = { name: req.body.name,
    //   usn: req.body.usn,
    // }
    console.log("req", req.body);
    // const routes = {
    //   AcademicEvents: "AcademicEvents",
    //   FunEvents: "FunEvents",
    //   SportEvent: "SportEvent",
    //   Fests: "Fests",
    //   EventToday: "EventToday",
    // };

    const { team_name, email, phone, event_selected, bio, website, route } =
      req.body;

    const Register = mongoose.model("Register", registerSchema, route);

    const existingRegistration = await Register.findOne({
      email,
      event_selected,
    });
    if (existingRegistration) {
      return res.status(409).json({ error: "Registration already exists" });
    }

    const newRegis = new Register({
      team_name,
      email,
      phone,
      event_selected,
      bio,
      website,
    });

    await newRegis.save();

    res.status(201).json({ message: "Registered successfully" });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Change password route
app.post("/password_change", async (req, res) => {
  try {
    // Extract the user data from the request body
    const { email, oldPassword, newPassword } = req.body;

    // Find the user with the provided email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the old password matches
    const passwordMatch = await bcrypt.compare(oldPassword, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid old password" });
    }

    // Hash the new password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Profile route
app.post("/api/profile", async (req, res) => {
  try {
    // Assuming you want to fetch the profile data for a specific user, you can pass the user's email as a query parameter
    const { usn } = req.body;

    // Find the user with the provided email
    const user = await User.findOne({ email: usn });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Return the user's profile data
    // const profileData = {
    //   name: user.name,
    //   usn: user.usn,
    //   sem: user.semester,
    //   department: user.branch,
    // };

    // res.json(profileData);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});

app.get("/", function (req, res) {
  res.end("Connected");
  console.log("Server connected");
});
