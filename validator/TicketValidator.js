const { z } = require("zod");

const TicketValidator = (data) => {
  const validate = z
    .object({
      ticketNumber: z.string().min(1).optional(),
      ticketStatus: z.boolean().default(true).optional(),
      consumer: z
        .object({
          name: z.string().min(1).optional(),
          age: z.number().positive().optional(),
        })
        .optional(),
      theater: z
        .object({
          name: z.string().min(1).optional(),
          location: z.string().min(1).optional(),
        })
        .optional(),
      movie: z
        .object({
          name: z.string().min(1).optional(),
          genre: z.string().min(1).optional(),
          screenTime: z.date().optional(),
        })
        .optional(),
      seatNo: z.number().positive().optional(),
      screenType: z.string().min(1).optional(),
      catergory: z.string().min(1).optional(),
      price: z.number().positive().optional(),
    })
    .optional();
  return validate.parse(data);
};

module.exports = TicketValidator;
