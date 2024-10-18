const jwt = require("jsonwebtoken");

const generateTokenSetCookie = async (userId, res) => {
  const token = jwt.sign(userId, process.env.SECRET_KEY, {
    expiresIn: "10d",
  });

  const timestamp = Date.now();
  const randomPart = Math.floor(Math.random() * 1000000);
  const coockieName = `${timestamp}-${randomPart}`;

  res.cookie(`${coockieName}`, token, {
    maxAge: 10 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
  });
};

module.exports = generateTokenSetCookie;
