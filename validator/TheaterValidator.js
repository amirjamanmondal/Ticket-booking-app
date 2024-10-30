const { z } = require("zod");

const TheaterValidator = z.object({
  name: z
    .string()
    .trim()
    .refine(
      (name, ctx) => {
        const index = ctx.parent.indexOf(name);
        return index === ctx.path[ctx.path.length - 1];
      },
      { message: "Duplicate name found" }
    ),
  place: z.array(z.string().trim()),
  screen: z.string().trim(),
  availability: z.boolean().default("true"),
  services: z.string().trim().optional(),
  theaterId: z.string().trim(),
  verification: z.boolean().default(false),
  status: z.boolean().default(false),
});

module.exports = TheaterValidator;