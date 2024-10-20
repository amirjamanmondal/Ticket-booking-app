const jwt = require("jsonwebtoken");
const Producer = require("../../../models/User/Producer");
const GetInfo = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({ user });
  } catch (error) {
    const errMessage = error.message;
    res.status(500).json({ errMessage });
  }
};

module.exports = GetInfo;
