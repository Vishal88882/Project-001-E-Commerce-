import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Successfully connected '))
  .catch((err) => console.error('Connection error:', err));


const ProfileSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

const Profile = mongoose.model("Profile", ProfileSchema);


app.post('/api/profile', async (req, res) => {
  try {

    const { username, password, email, phone } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);
    const newProfile = await Profile.create({
      username,
      password: hashedPassword,
      email,
      phone
    });

    res.status(201).json({
      success: true,
      data: newProfile,
      hashed_Password: hashedPassword
    })

  }
  catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
})

app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await Profile.findOne({ username });
    const ismatch = await bcrypt.compare(password, user.password)

    console.log("Entered password:", password);
    console.log("Stored password:", user.password);

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password!" });
    }
    if (!ismatch) {
      return res.status(400).json({ message: "Invalid username or password" })
    }

    res.status(200).json({ message: "login successful" })
  } catch (error) {
    return res.status(500).json({ message: "login failed" })
  }

})


app.get('/api/status', (req, res) => {
  res.json({ message: 'Server is running and connected to DB!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
