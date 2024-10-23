const Theater = require("../../models/Theater/Theater");
const generateAlphanumericString = require("../../utils/generateRandomString");

const AddTheater = async (req, res) => {
  try {
    const user = req.user;

    const { screen, availability, services } = req.body;

    if (!req.body) {
      return res.status(204).json({ message: "input not provided" });
    }

    const find = await Theater.findOne({ name: user.name });

    let newTheater;

    if (!find) {
      const theaterId = generateAlphanumericString(8);

      const theater = new Theater({
        name: user.name,
        place: [user.location || req.body.place],
        screen: screen,
        availability: availability,
        services: services,
        theaterId: theaterId,
      });
      if (theater) {
        await theater.save();
        newTheater = theater;
      }
    } else {
      return res.status(400).json({ message: "Theater failed to create" });
    }

    res
      .status(200)
      .json({ message: "Theater created successfully", newTheater });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = AddTheater;
