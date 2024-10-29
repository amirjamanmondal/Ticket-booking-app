const { z } = require("zod");

const TicketValidator = (data, isCreate) => {
  const validate = z.object({
    ticketNumber: z.string().min(1),
    ticketStatus: z.boolean().default(true),
    consumer: z.object({
      name: z.string().min(1),
      age: z.number().positive(),
    }),
    theater: z.object({
      name: z.string().min(1),
      location: z.string().min(1),
    }),
    movie: z.object({
      name: z.string().min(1),
      genre: z.string().min(1),
      screenTime: z.date(),
    }),
    seatNo: z.number().positive(),
    screenType: z.string().min(1),
    category: z.string().min(1),
    price: z.number().positive(),
  });
  return validate.parse(data);
};

module.exports = TicketValidator;