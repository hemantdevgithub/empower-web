import { z } from "zod";

export const commentValidationSchema = z.object({
  comment: z.string(),
});
