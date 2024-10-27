const bcrypt = require("bcrypt");
const User = require("../../../models/User/User");
const generateTokenSetCookie = require("../../../utils/generateTokenSetCookie");
const { validateUser } = require("../../../validator/userValidator");
const z = require("zod");
const handleZodError = require("../../../utils/ZodErrorHandler");

const Login = async (req, res) => {
  try {
    const validatedData = validateUser(req.body, false);

    if (!validatedData.email || !validatedData.password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const { email, password } = validatedData;
    console.log(validatedData);

    const find = await User.findOne({ email: email }).select("-password");

    if (!find) {
      return res.status(401).json({ message: "User not found!" });
    }

    const userId = find._id;

    if (find || (await bcrypt.compare(password, find?.password || " "))) {
      generateTokenSetCookie({ userId }, res);
    } else {
      return res.status(404).json({ message: "user data not found" });
    }
    res.status(200).json({ message: "user Login sucessfully", find });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const customError = handleZodError(error);
      return res.status(400).json(customError);
    } else {
      // Handle other errors
      return res.status(500).json({ error: "Internal server error" });
    }
  }
};

module.exports = Login;
