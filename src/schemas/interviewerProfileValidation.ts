import { DAYS } from "@/constants/global.constant";
import { z } from "zod";

const experienceValidationSchema = z.object({
  title: z.string(),
  company_name: z.string(),
  employment_type: z.string(),
  location_type: z.string(),
  isWorking: z.boolean().optional(),
  start_date: z.date(),
  end_date: z.date().optional(),
  skills: z.array(z.string()),
  media: z.array(z.string()).optional(),
});

const certificateValidationSchema = z.object({
  name: z.string(),
  issuing_organization: z.string(),
  credential_id: z.string(),
  credential_url: z.string(),
  issue_date: z.date(),
  expiry_date: z.date().optional(),
  skills: z.array(z.string()),
  media: z.array(z.string()).optional(),
});

export const updateInterviewerProfileValidation = z.object({
  skills: z.array(z.string()).optional(),
  certificates: certificateValidationSchema.optional(),
  experiences: experienceValidationSchema.optional(),
  areaOfExpertise: z.string().optional(),
});

export const updateInterviewerSkillValidation = z.object({
  skills: z.array(z.string()).optional(),
});

export const availabilitySlot = z.object({
  day: z.enum(["", ...DAYS] as [string, ...string[]]),
  isDisabled: z.boolean().default(false),
  userId: z.string(),
  role: z.string(),
  availabilities: z.array(
    z.object({
      startTime: z.string(),
      endTime: z.string(),
    })
  ),
});

export const updateInterviewerSchedules = z.object({
  schedules: z.array(availabilitySlot),
});
