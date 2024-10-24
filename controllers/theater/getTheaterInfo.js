const Theater = require("../../models/Theater/Theater");

async function GetTheaterInfo(req, res) {
  try {
    const user = req.user;

    const theater = await Theater.findOne({ name: user.name });

    if (theater) {
      res.status(200).json({ theater });
    } else {
      return res.status(404).json({ message: "Theater not created by you" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
}

module.exports = GetTheaterInfo;
