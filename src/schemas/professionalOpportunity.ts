import { z } from "zod";

const arrayOfObject = z.object({
  value: z.string(),
  label: z.string(),
});

export const professionalOpportunityValidationSchema = z.object({
  jobRole: z.string(),
  jobDescription: z.string(),
  jobId: z.string().optional(),
  country: z.string().optional().default(""),
  state: z.string().optional().default(""),
  city: z.string().optional().default(""),
  zipCode: z.string().optional().default(""),
  paymentType: z.string().optional().default(""),
  skills: z.array(arrayOfObject).optional(),
  experienceLevels: z.array(arrayOfObject).optional(),
  paymentRanges: z.array(arrayOfObject).optional(),
  volume: z.number().or(z.string()).optional(),
  workPermits: z.array(arrayOfObject).optional(),
  customerEngagementTypes: z.array(arrayOfObject).optional(),
  empowerBondTypes: z.array(arrayOfObject).optional(),
  workModels: z.array(arrayOfObject).optional(),
  startDates: z.array(arrayOfObject).optional(),
  durations: z.array(arrayOfObject).optional(),
  interviewModels: z.array(arrayOfObject).optional(),
  candidateIds: z.array(z.string()).optional(),
});
