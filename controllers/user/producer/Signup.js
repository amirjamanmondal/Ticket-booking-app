const bcrypt = require("bcrypt");
const Producer = require("../../../models/User/Producer");

const Signup = async (req, res) => {
  try {
    const { name, email, password, age, gender } = req.body;

    const find = await Producer.findOne({ email });

    if (find) {
      return res.status(409).json({ message: "user already exist" });
    }

    const saltRound = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, saltRound);

    console.log(hashed);

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
    const message = error.message;
    console.log({ error });

    res.status(500).json({ message });
  }
};

module.exports = Signup;
