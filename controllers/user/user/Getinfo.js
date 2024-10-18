const jwt = require("jsonwebtoken");

const GetInfo = async (req, res) => {
  try {
    const user = req.user;

    res.status(200).json({ message: "user data fetched ", user });
  } catch (error) {
    const errMessage = error.message;
    res.status(500).json({ error: errMessage });
  }
};

module.exports = GetInfo;
