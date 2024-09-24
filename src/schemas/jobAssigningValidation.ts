import { z } from "zod";

export const assignJobToSRMValidationSchema = z.object({
  srmIds: z.array(z.string()),
});
export const inviteJobToCandidateValidationSchema = z.object({
  candidateIds: z.array(z.string()),
});
