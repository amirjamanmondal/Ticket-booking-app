const bcrypt = require("bcrypt");
const Producer = require("../../../models/User/Producer");
const generateTokenSetCookie = require("../../../utils/generateTokenSetCookie");
const { z } = require("zod");
const ProducerValidator = require("../../../validator/producerValidator");
const handleZodError = require("../../../utils/ZodErrorHandler");

const Login = async (req, res) => {
  try {
    const validatData = ProducerValidator(req.body, false);

    const { email, password } = validatData;

    if (!validatData.email || !validatData.password) {
      return res.status(404).json({ message: " It can not be empty fields " });
    }

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
    if (error instanceof z.ZodError) {
      const customError = handleZodError(error);
      return res.status(400).json(customError);
    } else {
      // Handle other errors
      return res.status(500).json(error.message);
    }
  }
};

module.exports = Login;
