const jwt = require("jsonwebtoken");

const generateTokenSetCookie = async (userId, res) => {
  const token = jwt.sign(userId, process.env.SECRET_KEY, {
    expiresIn: "10d",
  });

  res.cookie("jwt", token, {
    maxAge: 10 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
  });
  
};

module.exports = generateTokenSetCookie;
