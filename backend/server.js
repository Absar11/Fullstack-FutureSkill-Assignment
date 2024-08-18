const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cardRoutes = require("./routes/cardRoutes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", cardRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.get("/ping", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
