const Movie = require("../../models/movie/Movie");

const SearchMovie = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "failed to sync" });
    }

    const movie = await Movie.findById({ _id: id });
    if (!movie) {
      return res
        .status(404)
        .json({ message: "movie failed to fethc or not found" });
    }
    res.status(200).json({ message: "movie fetched Success", movie });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = SearchMovie;
