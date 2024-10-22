const Movie = require("../../models/movie/Movie");

const DeleteMovie = async (req, res) => {
  try {
    const user = req.user;
    const id = req.pararms.id;

    if (!id) {
      return res.status(401).json({ message: "id not provided" });
    }

    const movie = await Movie.findByIdAndDelete({ _id: id }).select("name");
    if (!movie) {
      return res
        .status(404)
        .json({ message: "failed to fetch movie or not founded" });
    }

    res.status(200).json({ message: "Deleted the movie Succesfully", movie });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = DeleteMovie;
