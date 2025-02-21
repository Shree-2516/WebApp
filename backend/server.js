import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import app from "./app.js";

// ✅ Load environment variables from .env file
dotenv.config();

// ✅ Initialize Express App
const server = express();

// ✅ Enable CORS for Frontend (http://localhost:5173)
server.use(cors({
    origin: "http://localhost:5173", // Allow frontend requests
    credentials: true // Allow cookies, auth headers
}));

// ✅ Middleware for JSON parsing
server.use(express.json());

// ✅ Handle Preflight Requests
server.options("*", cors());

// ✅ Set Port (Default: 5000 if not set)
const PORT = process.env.PORT || 5000;

// ✅ Start Server
server.listen(PORT, () => {
    console.log(`🚀 SERVER HAS STARTED AT PORT ${PORT}`);
});
