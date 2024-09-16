const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');
require('dotenv').config(); 
const connectToMongo = require('./db');
const app = express();


app.use(cors());
app.use(express.json());

// MongoDB connection
connectToMongo();

// Routes
app.use('/api', apiRoutes);

// Start the server
const PORT =  5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
