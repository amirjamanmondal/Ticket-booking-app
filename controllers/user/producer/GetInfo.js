const jwt = require("jsonwebtoken");
const Producer = require("../../../models/User/Producer");
const GetInfo = async (req, res) => {
  try {
    const token = req.cookies.login;

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const data = await Producer.findById({
      _id: decoded.userId,
    }).select("-password -_id");

    res.send({ data });
  } catch (error) {
    const errMessage = error.message;
    res.status(500).json({ errMessage });
  }
};

module.exports = GetInfo;
