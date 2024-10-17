const bcrypt = require("bcrypt");
const User = require("../../../models/User/User");

const Signup = async (req, res) => {
  try {
    const { name, email, password, gender, age } = req.body;

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
    const message = error.message;
    res.status(500).json({ message });
  }
};

module.exports = Signup;
