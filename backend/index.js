const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/userRoute');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5173"], // Allow multiple origins
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
// Routes
app.use('/api/auth', authRoutes);

// Database Connection
connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
