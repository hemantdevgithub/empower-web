import { z } from "zod";

// const contentObjectSchema = z.object({
//   title: z.string(),
//   description: z.string(),
//   image: z.string().optional(),
// });

export const createWebinarValidationSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  subCategory: z.string(),
  // contents: z.array(contentObjectSchema).optional(),
});

export const registerWebinarValidationSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  companyName: z.string(),
  email: z.string(),
});
