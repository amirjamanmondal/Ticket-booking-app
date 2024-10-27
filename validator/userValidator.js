const { z } = require("zod");

const validateUser = (data, isSignup) => {
  const userSchema = z.object({
    name: isSignup
      ? z.string().min(1, { message: "Name is required" }).trim()
      : z.string().optional(),
    email: z
      .string()
      .email({ message: "invalid email id" })
      .min(8, { message: "Email must be at least 8 characters" })
      .trim(),
    password: z
      .string()
      .min(1, { message: "password must be atleast 6 character and required " })
      .trim(),
    gender: isSignup
      ? z.string("Numbers not allowed").trim().max(6).min(4)
      : z.string().optional(),
    age: isSignup
      ? z.number({ message: "The age must be a number" }).min(1)
      : z.number({ message: "age must be a number" }).optional(),
    location: z
      .string()
      .trim()
      .max(150, "input should not execed 150 character")
      .optional(),
  });
  return userSchema.parse(data);
};

const validateProducer = (data, isSignup) => {
  const producerSchema = z.object({
    name: isSignup
      ? z.string().trim().min(4, { message: "Name must be atleast 4 letters" })
      : z.string().optional(),
    email: z
      .string()
      .email({ message: "Email is invalid" })
      .trim()
      .endsWith(".com", { message: "This is not a valid Email" })
      .min(4),
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

module.exports = { validateUser, validateProducer };
