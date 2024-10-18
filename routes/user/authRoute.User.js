const express = require('express')
const Signup = require('../../controllers/user/user/Signup');
const Login = require('../../controllers/user/user/Login')
const Logout = require('../../controllers/user/user/Logout');
const GetInfo = require('../../controllers/user/user/Getinfo')
const UserAuth = require('../../middleware/auth.user')


const userRouter = express.Router();

userRouter.post('/signup',  Signup);
userRouter.post('/login', Login);
userRouter.get('/',UserAuth, GetInfo);
userRouter.post('/logout',UserAuth, Logout);


module.exports = userRouter;
