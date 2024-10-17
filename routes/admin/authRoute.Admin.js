const express = require("express");
const Signup = require('../../controllers/user/admin/Signup')

const adminRouter = express.Router();

adminRouter.get('/');
adminRouter.post('/signup');
adminRouter.post('/login');
adminRouter.delete('/remove');
adminRouter.get('/logout')

module.exports = adminRouter;
