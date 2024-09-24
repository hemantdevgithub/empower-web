import { z } from "zod";

export const createArticleValidationSchema = z.object({
  title: z.string(),
  content: z.string(),
  category: z.string(),
  subCategory: z.string(),
});
