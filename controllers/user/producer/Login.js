const bcrypt = require("bcrypt");
const Producer = require("../../../models/User/Producer");
const generateTokenSetCookie = require("../../../utils/generateTokenSetCookie");

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const find = await Producer.findOne({ email: email });

    if (!find) {
      return res.status(401).json({ message: "User not found!" });
    }

    const userId = find._id;
    if (find || (await bcrypt.compare(password, find?.password || " "))) {
      generateTokenSetCookie({ userId }, res);
    } else {
      return res.status(404).json({ message: "user data not found" });
    }
    find.password = undefined;
    res.status(200).json({ message: "user Login sucessfully", find });
  } catch (error) {
    const errMessage = error.message;
    res.status(500).json({ errMessage });
  }
};

module.exports = Login;
