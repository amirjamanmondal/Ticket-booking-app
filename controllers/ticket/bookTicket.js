const Ticket = require("../../models/Ticket/Ticket");
const Movie = require("../../models/movie/Movie");
const BookTicket = async (req, res) => {
  try {
    const user = req.user;
    const id = req.params.id;

    const { seatNo, screenType, catergory } = req.body;

    const movie = await Movie.find({ _id: id }).select(
      "name genre ticket release"
    );
    if (!movie) {
      return res.status(200).json("content not found");
    }

    const data = movie;

    console.log(data.name);

    const alphaNumeric = generateAlphanumericString(15);

    const ticket = new Ticket({
      tickeNumber: alphaNumeric,
      consumer: {
        name: user.name,
        age: user.age,
      },
      theater: {
        name: "Jublie hall",
        location: "Delhi metrocity",
      },
      movie: {
        name: movie.name,
        genre: movie.genre,
        screenTime: movie.release.toString(),
      },
      seatNo: seatNo,
      screenType: screenType,
      category: catergory,
      price: movie.ticket,
    });

    if (!ticket) {
      return res.status(204).json({ message: "body cant be null" });
    }

    await ticket.save();

    res.status(200).json({ ticket });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports = BookTicket;

function generateAlphanumericString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}
