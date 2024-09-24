import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z.string().email({ message: "Please provide a valid email." }),
  password: z.string().min(6).max(30),
});

export const registerValidationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(30),
});
