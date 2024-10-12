import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoutes from './router/user.route.js'; // Correct route import

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Load environment variables
dotenv.config();
const PORT = process.env.PORT || 3000;
const URI = process.env.MongodbUri; // Use URI from .env

// MongoDB Connection
mongoose
  .connect(URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Routes 
app.use('/users', UserRoutes); // Consistent route naming

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
