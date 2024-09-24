import { z } from "zod";

export const addResearchAndDevelopmentValidationSchema = z.object({
  title: z.string(),
  content: z.string(),
  category: z.string(),
});
