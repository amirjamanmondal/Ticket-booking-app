const { z } = require("zod");

const MovieValidator = z.object({
  name: z.string().trim(),
  production: z.array(z.string().trim()),
  director: z.array(z.string().trim()),
  producer: z.array(z.string().trim()),
  cast: z.array(z.string().trim()),
  genre: z.string().trim(),
  duration: z.string().trim(),
  release: z.date(),
  ticket: z.number(),
  streaming: z.array(z.string().trim()),
  origin: z.string().trim(),
  budget: z.string().trim(),
});

module.exports = MovieValidator;
