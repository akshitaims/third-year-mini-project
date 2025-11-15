// server.js
// Import required modules
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000; // You can change this if needed

// Middleware to parse form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Basic Route - Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Example API Route - for feedback form
app.post('/feedback', (req, res) => {
    const { name, email, message } = req.body;
    console.log("Feedback received:");
    console.log({ name, email, message });
    res.json({ status: "success", message: "Thank you for your feedback!" });
});

// Example route for education page
app.get('/education', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'education.html'));
});

// Example route for drills page
app.get('/drills', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'drills.html'));
});

// Example route for alerts page
app.get('/alerts', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'alerts.html'));
});

// Example route for contact page
app.get('/contacts', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contacts.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
// backend/server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// API Routes
app.use("/api/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
