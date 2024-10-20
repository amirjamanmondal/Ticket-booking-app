const Movie = require("../../models/movie/Movie");

const AddMovie = async (req, res) => {
  try {
    const user = req.user;
    const {
      name,
      production,
      director,
      cast,
      genre,
      duration,
      release,
      ticket,
      streaming,
      origin,
      budget,
    } = req.body;

    const newMovie = new Movie({
      name: name,
      production: production,
      director: director,
      producer: user.name,
      cast: cast,
      genre: genre,
      duration: duration,
      release: release,
      ticket: ticket,
      streaming: streaming,
      origin: origin,
      budget: budget,
    });
    if (newMovie) {
      await newMovie.save();
    } else {
      return res.status(400).json({ message: "movie data invalid" });
    }
    res.status(200).json({ newMovie });
  } catch (error) {
    const errMessage = error.message;
    res.status(500).json({ errMessage });
  }
};

module.exports = AddMovie;
