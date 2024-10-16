const express = require('express')

const userRouter = express.Router();

userRouter.get('/');
userRouter.post('/signup');
userRouter.post('/login');
userRouter.delete('/remove');

module.exports = userRouter;
