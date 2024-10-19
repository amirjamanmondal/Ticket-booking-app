const Ticket = require("../../models/Ticket/Ticket");

const CancelTicket = async (req, res) => {
  try {
    const user = req.user;
    const ticketId = req.params.id;

    if (!user) {
      return res.status.json("user not found and unauthorized");
    }

    const ticket = await Ticket.findById({ _id: ticketId });

    if (!ticket) {
      return res.status(204).json({ message: "Ticket not found" });
    }

    if (!ticket.consumer.name === user.name) {
      console.log({ message: "This ticket is not owned by the user" });
    }
    ticket.ticketStatus = false;
    await ticket.save();

    res.status(200).json({ message: "Ticket is canceled!", ticket });
  } catch (error) {
    const errMessage = error.meassage;
    res.status(500).json(errMessage);
    console.log(error);
  }
};

module.exports = CancelTicket;
