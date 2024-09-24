import { z } from "zod";

export const SRMJobApplyValidationSchema = z.object({
  candidateIds: z.array(z.string()),
});
