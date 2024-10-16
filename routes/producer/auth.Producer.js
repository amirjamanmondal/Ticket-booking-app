const express = require("express");
const Signup = require("../../controllers/user/producer/Signup");
const Login = require("../../controllers/user/producer/Login");
const Logout = require("../../controllers/user/producer/Logout");
const GetInfo = require("../../controllers/user/producer/GetInfo");

const producerRouter = express.Router();

producerRouter.post("/signup", Signup);
producerRouter.post("/login", Login);
producerRouter.get("/", GetInfo);
producerRouter.delete("/remove");
producerRouter.get("/logout", Logout);

module.exports = producerRouter;
