const express = require("express");

const dotenv = require("dotenv");

const cors = require("cors");

const mongoose = require("mongoose");

const cookieParser = require("cookie-parser");

const adminRouter = require('./routes/admin/authRoute.Admin')

const producerRouter = require("./routes/producer/authRoute.Producer");

const userRouter = require("./routes/user/authRoute.User");

const app = express();

app.use(cors());

dotenv.config();

app.use(cookieParser());

app.use(express.json());

app.use('/admin', adminRouter)
app.use("/producer", producerRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from server side." });
});

const PORT = 8000;

app.listen(PORT, () => console.log("server is runnig on port 8000"));

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("Database is connected."))
  .catch((error) => console.log(error.message));
