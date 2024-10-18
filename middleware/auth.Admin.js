const jwt = require("jsonwebtoken");
const Admin = require("../models/User/Admin");

const AuthRouteAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized access!" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.userId;
    const user = await Admin.findById({ _id: userId }).select("-password");
    if (!user) {
      return res.status(401).json({message: 'Not a user'})
    }

    req.user = user;
    next();
  } catch (error) {
    const errMessage = error.message;
    res.status(500).json({ error: errMessage });
  }
};

module.exports = AuthRouteAdmin;
