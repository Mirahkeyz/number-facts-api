const express = require("express");
const cors = require("cors");
const { classifyNumber } = require("./controllers/numberController");

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // For parsing application/json

// API route
app.get("/api/classify-number", classifyNumber);

module.exports = app;