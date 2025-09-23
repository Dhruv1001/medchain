// server.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./database.js");
const authRoutes = require("../routes/auth.js");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api", authRoutes);

// Start server
const PORT = 4000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));


//mongodb://localhost:27017/