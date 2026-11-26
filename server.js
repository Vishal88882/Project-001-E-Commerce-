import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173', // apne frontend ka URL daalein (jaise 5173 ya 3000)
    credentials: true,
  })
)

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Successfully connected '))
  .catch((err) => console.error('Connection error:', err));


const ProfileSchema = new mongoose.Schema({
  name: {
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
  },
  location: {
    type: String,
    required: true
  }
});

const Profile = mongoose.model("Profile", ProfileSchema);


app.post('/api/signup', async (req, res) => {
  try {

    const { name, password, email, phone, location } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);
    const newProfile = await Profile.create({
      name,
      password: hashedPassword,
      email,
      phone,
      location
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
    const { email, password } = req.body;

    const user = await Profile.findOne({ email });
    const ismatch = await bcrypt.compare(password, user.password)


    if (!user) {
      return res.status(401).json({ message: "Invalid emial or password!" });
    }
    if (!ismatch) {
      return res.status(401).json({ message: "Invalid email or password" })
    }

    res.status(200).json({
      message: "loggin successfull",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        location: user.location,
      },
    })
  } catch (error) {
    return res.status(500).json({ message: "login failed" })
  }

})

app.post('/api/change_password', async (req, res) => {
  try {
    const { email, currentPassword, newPassword } = req.body;

    const user = await Profile.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid emial or password!" });
    }
    
    const ismatch = await bcrypt.compare(currentPassword, user.password)

    if (!ismatch) {
      return res.status(401).json({ message: "Invalid email or password" })
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    await Profile.updateOne({ email }, { $set: { password: hashedPassword } })

    const checking = await bcrypt.compare(currentPassword, user.password)

    if (!checking) (
      console.log("same hai")
    )
    res.status(200).json({
      message: "password changed",
    })


  } catch (error) {
    return res.status(500).json({ message: "update failed" })
  }

})

app.get('/api/status', (req, res) => {
  res.json({ message: 'Server is running and connected to DB!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
