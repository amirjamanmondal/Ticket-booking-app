const express = require('express')
const Signup = require('../../controllers/user/user/Signup');
const Login = require('../../controllers/user/user/Login')
const Logout = require('../../controllers/user/user/Logout');
const GetInfo = require('../../controllers/user/user/Getinfo')
const AuthUser = require('../../middleware/auth.user')


const userRouter = express.Router();

userRouter.get('/', GetInfo);
userRouter.post('/signup',  Signup);
userRouter.post('/login', Login);
userRouter.post('/logout',AuthUser, Logout);


module.exports = userRouter;
