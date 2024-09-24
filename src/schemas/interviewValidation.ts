import { z } from "zod";

const arrayOfObject = z.object({
  value: z.string(),
  label: z.string(),
});

export const interviewValidationSchema = z.object({
  interviewId: z.string().optional(),
  jobDescription: z.string().optional().default(""),
  jobRoles: z.array(arrayOfObject).optional().default([]),
  skills: z.array(arrayOfObject).optional().default([]),
  interviewTypes: z.array(arrayOfObject).optional().default([]),
});
