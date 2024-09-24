import { z } from "zod";

export const createQuizValidationSchema = z.object({
  category: z.string(),
  lesson: z.string().optional(),
  timer: z.coerce.number().min(1),
  redoQuiz: z.enum(["yes", "no"]),
  question: z.string(),
  option1: z.string(),
  option2: z.string(),
  option3: z.string(),
  option4: z.string(),
  correctOption: z.string(),
  questionType: z.enum(["multiple-choice"]),
});
