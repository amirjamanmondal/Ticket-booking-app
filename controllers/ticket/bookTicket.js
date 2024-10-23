const Ticket = require("../../models/Ticket/Ticket");
const Movie = require("../../models/movie/Movie");
const generateAlphanumericString = require("../../utils/generateRandomString");
const BookTicket = async (req, res) => {
  try {
    const user = req.user;
    const id = req.params.id;

    const { seatNo, screenType, catergory } = req.body;

    const movie = await Movie.find({ _id: id }).select(
      "name genre ticket release"
    );
    const alphaNumeric = generateAlphanumericString(15);
    if (movie) {
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
          screenTime: movie.release,
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
    } else {
      return res.status(400).json({ message: "Ticket not generated " });
    }
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports = BookTicket;
