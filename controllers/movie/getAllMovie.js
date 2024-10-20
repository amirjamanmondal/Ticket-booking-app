const Movie = require("../../models/movie/Movie");

const GetAllMovie = async (req, res) => {
  try {
    const user = req.user;

    const movies = await Movie.find({ producer: user.name }).select(
      "name cast release budget"
    );

    if (!movies) {
      return res.status(204).json({ message: "movies not found" });
    }

    res.status(200).json({ movies });
  } catch (error) {
    const errMessage = error.message;
    res.status(500).json({ errMessage });
  }
};

module.exports = GetAllMovie;
