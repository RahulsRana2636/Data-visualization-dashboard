
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const connectToMongo = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/BlackCoffer');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectToMongo;
