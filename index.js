const express = require("express");

const dotenv = require("dotenv");

const cors = require("cors");

const mongoose = require("mongoose");

const cookieParser = require("cookie-parser");

const session = require("express-session");

const producerRouter = require("./routes/producer/authRoute.Producer");

const userRouter = require("./routes/user/authRoute.User");

const app = express();

app.use(cors());

dotenv.config();

app.use(cookieParser());

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3600000
    }
  }),
);

app.use(express.json());

app.use("/producer", producerRouter);
app.use("/user", userRouter);

const PORT = process.env.PORT || 4004;

app.listen(PORT, () => console.log("server is runnig on port 8000"));

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("Database is connected."))
  .catch((error) => console.log(error.message));
