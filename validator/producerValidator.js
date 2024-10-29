const { z } = require("zod");

const ProducerValidator = (data, isSignup) => {
  const producerSchema = z.object({
    name: isSignup
      ? z.string().trim().min(4, { message: "Name must be atleast 4 letters" })
      : z.string().optional(),
    email: z.string().email({ message: "Email is invalid" }).trim().min(4),
    password: z.string().trim().min(6),
    age: isSignup ? z.number().min(1) : z.number().optional(),
    gender: isSignup ? z.string().min(4).max(7).trim() : z.string().optional(),
    about: z
      .string()
      .min(10, { message: "Atleast 10 character is required" })
      .max(150, { message: "Do not exceed 150 character" })
      .trim()
      .optional(),
    company: z.string().trim().optional(),
    films: z.array().optional(),
    avatar: z.string().optional(),
  });
  return producerSchema.parse(data);
};

module.exports = ProducerValidator;
