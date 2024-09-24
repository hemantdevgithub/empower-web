import { z } from "zod";

export const projectValidationSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  requiredJobRole: z.string(),
  requiredSkills: z.array(z.string()),
  timeline: z.string(),
  paymentType: z.string(),
  paymentRange: z.string(),
});
