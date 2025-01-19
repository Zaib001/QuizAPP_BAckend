const mongoose = require("mongoose");
console.log("Connecting to MongoDB with URL:", process.env.MONGO_URL);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });

module.exports = mongoose.connection;
