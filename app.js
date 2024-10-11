const express = require('express');
const connectDB = require('./config/db');
const cryptoRoutes = require('./routes/cryptoRoutes');
require('dotenv').config();

const app = express();
app.use(express.json()); // For parsing JSON request bodies

// Connect to MongoDB
connectDB();

// API routes
app.use('/api/crypto', cryptoRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
