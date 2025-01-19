const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const dbConfig = require("./config/dbConfig");

const usersRoute = require("./routes/usersRoute");
const examsRoute = require("./routes/examsRoute");
const resportsRoute = require("./routes/reportsRoute");

app.use("/api/users", usersRoute);
app.use("/api/exams", examsRoute);
app.use("/api/reports", resportsRoute);

const path = require("path");
__dirname = path.resolve();

// Serve static files in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client", "build")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

// Default route for root
app.get("/", (req, res) => {
  res.send("Server is running. Welcome to the QuizApp backend!");
});


// Export the express app as a Vercel function
module.exports = app;
