const Ticket = require("../../models/Ticket/Ticket");

const BookTicket = async (req, res) => {
  try {
    const user = req.user;
    const { seatNo, screenType, catergory, price } = req.body;

    if (!user) {
      return res.status.json("user not found and unauthorized");
    }

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
        name: "Sholey",
        genre: "action/drama",
        screenTime: 120,
      },
      seatNo: seatNo,
      screenType: screenType,
      category: catergory,
      price: price,
    });

    if (!ticket) {
      return res.status(204).json({ message: "body cant be null" });
    }

    await ticket.save();

    res.status(200).json({ ticket });
  } catch (error) {
    const errMessage = error.meassage;
    res.status(500).json(errMessage);
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
