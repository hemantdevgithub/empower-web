import { z } from "zod";

export const pollValidationSchema = z.object({
  // category: z.enum(["general"]),
  question: z.string(),
});
