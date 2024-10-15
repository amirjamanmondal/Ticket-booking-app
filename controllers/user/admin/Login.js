const bcrypt = require("bcrypt");
const Admin = require("../../../models/User/Admin");
const generateTokenSetCookie = require("../../../utils/generateTokenSetCookie");

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const find = await Admin.findOne({ email: email });

    if (!find) {
      return res.status(401).json({ message: "User not found!" });
    }

    if (find || (await bcrypt.compare(password, find?.password || " "))) {
      generateTokenSetCookie(find._id, res);
    } else {
      return res.status(404).json({ message: "user data not found" });
    }
    res.status(200).json({ message: "user Login sucessfully" });
  } catch (error) {
    const errMessage = error.message;
    res.status(500).json({ errMessage });
  }
};

module.exports = Login;
