const express = require('express');
const dotenv = require('dotenv');
const path = require('path'); // Node.js path module
dotenv.config(); // This loads environment variables from .env into process.env


dotenv.config({ path: path.join(__dirname, 'src', '.env') });
const userRoutes = require('./routes/userRoutes'); // Adjust path based on your structure
const connectDB = require('./config/db');

dotenv.config();
const app = express();

connectDB(); // Connect to MongoDB

app.use(express.json());
app.use('/worko/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export the app for testing
