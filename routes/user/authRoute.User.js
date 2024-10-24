{
  /*modules used in this router
    1. installed module
        express
    2. created module 
        Signup,
        Login,
        Logout,
        GetInformation,
        UserAuth,
        BookTicket,
        CancelTicket,
        AddTheater
    3. all route of user 
        http://localhost:8000/user/signup
        http://localhost:8000/user/login
        http://localhost:8000/user/
        http://localhost:8000/user/logout
        http://localhost:8000/user/book/:id
        http://localhost:8000/user/cancelticket/:id
        http://localhost:8000/user/theater
        http://localhost:8000/user/theaterinfo/:id
        http://localhost:8000/user/deletetheater/:id
        */
}

const express = require("express");
const Signup = require("../../controllers/user/user/Signup");
const Login = require("../../controllers/user/user/Login");
const Logout = require("../../controllers/user/user/Logout");
const GetInfo = require("../../controllers/user/user/Getinfo");
const UserAuth = require("../../middleware/auth.user");
const BookTicket = require("../../controllers/ticket/bookTicket");
const CancelTicket = require("../../controllers/ticket/cancelTicket");
const AddTheater = require("../../controllers/theater/addTheater");
const DeleteTheater = require("../../controllers/theater/deleteTheater");
const GetTheaterInfo = require('../../controllers/theater/getTheaterInfo')

const userRouter = express.Router();
userRouter.post("/signup", Signup);
userRouter.post("/login", Login);
userRouter.get("/", UserAuth, GetInfo);
userRouter.post("/logout", UserAuth, Logout);
userRouter.post("/t/book/:id", UserAuth, BookTicket);
userRouter.post("/t/cancel/:id", UserAuth, CancelTicket);
userRouter.post("/theater/add/", UserAuth, AddTheater);
userRouter.delete("/theater/:id", UserAuth, DeleteTheater);
userRouter.get('/theater', UserAuth, GetTheaterInfo)
module.exports = userRouter;
