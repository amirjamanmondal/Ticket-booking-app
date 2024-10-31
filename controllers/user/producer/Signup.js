const bcrypt = require("bcrypt");
const Producer = require("../../../models/User/Producer");
const { z } = require("zod");
const ProducerValidator = require("../../../validator/producerValidator");
const handleZodError = require("../../../Helpers/ZodErrorHandler");

const Signup = async (req, res) => {
  try {
    const validateData = ProducerValidator(req.body, true);

    if (
      !validateData.name ||
      !validateData.email ||
      !validateData.password ||
      !validateData.age ||
      !validateData.gender
    ) {
      return res.status(404).json({ message: "Missing required fields " });
    }

    const { name, email, password, age, gender } = validateData;

    const find = await Producer.findOne({ email });

    if (find) {
      return res.status(409).json({ message: "user already exist" });
    }

    const saltRound = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, saltRound);

    const newUser = new Producer({
      name: name,
      email: email,
      password: hashed,
      age: age,
      gender: gender,
    });

    if (newUser) {
      await newUser.save();
    } else {
      return res.status(400).json({ message: "user data invalid" });
    }
    res.status(201).json({ message: "Signup successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const customError = handleZodError(error);
      return res.status(400).json(customError);
    } else {
      // Handle other errors
      console.log(error.message);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
};

module.exports = Signup;
