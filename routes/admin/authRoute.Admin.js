const express = require("express");
const Signup = require("../../controllers/user/admin/Signup");
const Login = require("../../controllers/user/admin/Login");
const Logout = require("../../controllers/user/admin/Logout");
const GetInfo = require("../../controllers/user/admin/GetInfo");

const AuthRouteAdmin = require("../../middleware/auth.Admin");

const adminRouter = express.Router();

adminRouter.post("/signup", Signup);
adminRouter.post("/login", Login);
adminRouter.get("/", AuthRouteAdmin, GetInfo);
adminRouter.delete("/remove");
adminRouter.get("/logout", AuthRouteAdmin, Logout);

module.exports = adminRouter;
