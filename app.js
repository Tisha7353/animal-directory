const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const animalRoutes = require('./routes/animalRoutes');

// Initialize express app
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', animalRoutes);

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
