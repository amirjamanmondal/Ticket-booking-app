const express = require("express");
const Signup = require("../../controllers/user/producer/Signup");
const Login = require("../../controllers/user/producer/Login");
const Logout = require("../../controllers/user/producer/Logout");
const GetInfo = require("../../controllers/user/producer/GetInfo");
const AuthRouteProducer = require("../../middleware/auth.producer");
const AddMovie = require("../../controllers/movie/addMovie");
const GetAllMovie = require("../../controllers/movie/getAllMovie");
const SearchMovie = require("../../controllers/movie/searchMovie");

const producerRouter = express.Router();

producerRouter.post("/signup", Signup);
producerRouter.post("/login", Login);
producerRouter.get("/", AuthRouteProducer, GetInfo);
producerRouter.delete("/remove");
producerRouter.get("/logout", Logout);
producerRouter.post("/publish", AuthRouteProducer, AddMovie);
producerRouter.get("/movie", AuthRouteProducer, GetAllMovie);
producerRouter.get("/movie/:id", SearchMovie);

module.exports = producerRouter;
