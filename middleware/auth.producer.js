const jwt = require("jsonwebtoken");
const Producer = require("../models/User/Producer");

const AuthRouteProducer = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized access!" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.userId;

    const user = await Producer.findById({ _id: userId });

    if (!user) {
      return res.status(404).json({ message: "Unauthorised access No account found" });
    }
    req.user = user;
    next();
  } catch (error) {
    const errMessage = error.message;
    res.status(500).json({ error: errMessage });
  }
};

module.exports = AuthRouteProducer;
