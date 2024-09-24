import { z } from "zod";

export const createQAndAValidationSchema = z.object({
  category: z.string({ required_error: "Please select a category." }),
  title: z.string({ required_error: "Please enter a title." }),
  file: z.any().optional(),
  description: z.string({ required_error: "Please enter a description." }),
});
