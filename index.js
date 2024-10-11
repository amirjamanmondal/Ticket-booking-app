const express = require("express");

const dotenv = require("dotenv");

const cors = require("cors");

const mongoose = require("mongoose");

const app = express();

app.use(cors());

dotenv.config();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from server side." });
});

const PORT = 8000;

app.listen(PORT, () => console.log("server is runnig on port 8000"));

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("Database is connected."))
  .catch((error)=>console.log(error.message))
