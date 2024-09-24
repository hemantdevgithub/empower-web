import { z } from "zod";

export const addLessonValidationSchema = z.object({
  title: z.string(),
  content: z.string(),
  category: z.string(),
});
