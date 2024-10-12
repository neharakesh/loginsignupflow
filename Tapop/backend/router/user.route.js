import express from 'express'


const router=express.Router()







// Create a new user
router.post('/create', async (req, res) => {
  const { name, email, about, profilePicture,coverPhoto } = req.body;
  try {
    const newUser = new User({ name, email, about, profilePicture,coverPhoto });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// Get all users
router.get('/all', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

export default router;
