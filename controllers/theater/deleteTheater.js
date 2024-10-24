const Movie = require("../../models/Theater/Theater");

async function DeleteTheater(req, res) {
  try {
    const user = req.user;
    const id = req.params.id;

    const movie = await Movie.findById({ _id: id });
    if (movie) {
      await movie.deleteOne();
    } else {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json({ message: "movie deleted success", movie });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = DeleteTheater;