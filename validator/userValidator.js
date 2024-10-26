const { z } = require("zod");

const userSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string()
    .email({ message: "invalid email id" })
    .min(8, { message: "Email must be at least 8 characters" })
    .trim(),
  password: z
    .string()
    .min(1, { message: "password must be atleast 6 character and required " })
    .trim(),
  gender: z
    .string("Numbers not allowed")
    .trim()
    .min(1, { message: "gender is required" }),
  age: z.number({ message: "age must be a number" }).min(1),
  location: z.string().trim().max(150, "input should not execed 150 character").optional(),
});

module.exports = userSchema;
