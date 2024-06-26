const mongoose = require('mongoose');

const connectDB = async () => {
    const dbUrl = 'mongodb+srv://alokabhigyan65:Abhi1997$$@sharpenerproject.msds32f.mongodb.net/work';

    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
