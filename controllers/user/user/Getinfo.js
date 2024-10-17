const jwt = require("jsonwebtoken");

const User = require("../../../models/User/User");

const GetInfo = async (req, res) => {
  try {
    const token = req.cookies.login;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.userId;

    if (!token) {
      return res.status(401).json({ message: "unauthorized access !" });
    }
    const user = await User.findById({ _id: userId }).select("-password -_id");

    res.status(200).json({ message: "user data fetched ", user });
  } catch (error) {
    const errMessage = error.message;
    res.status(500).json({ error: errMessage });
  }
};

module.exports = GetInfo;
