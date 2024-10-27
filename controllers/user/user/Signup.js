const bcrypt = require("bcrypt");
const User = require("../../../models/User/User");
const validateUser = require("../../../validator/userValidator");
const z = require("zod");
const handleZodError = require('../../../utils/ZodErrorHandler')

const Signup = async (req, res) => {
  try {
    const validatedData = validateUser(req.body, true);
    if (
      !validatedData.name ||
      !validatedData.email ||
      !validatedData.password
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const { name, email, password, gender, age } = validatedData;

    const find = await User.findOne({ email });

    if (find) {
      return res.status(401).json({ message: "user already exist" });
    }

    const saltRound = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, saltRound);

    const newUser = new User({
      name: name,
      email: email,
      password: hashed,
      gender: gender,
      age: age,
    });

    await newUser.save();

    res.status(201).json({ message: "Signup successfully" });
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

module.exports = Signup;
