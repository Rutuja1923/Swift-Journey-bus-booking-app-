const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();

const app = express();

//connecting to the database
connectDB()
    .then(() => {
        console.log('Database connected successfully')
    })
    .catch((err) => {
        console.error('Database connection failed:', err.message);
        process.exit(1);
    });

app.use(cors());
app.use(express.json());

//testing route
app.get('/', (req, res) => {
    res.send('Server is running, and database connection is verified.');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
