import { DAYS } from "@/constants/global.constant";
import { z } from "zod";

export const createExperienceValidationSchema = z.object({
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

export const createCertificateValidationSchema = z.object({
  name: z.string(),
  issuing_organization: z.string(),
  credential_id: z.string(),
  credential_url: z.string(),
  issue_date: z.date(),
  expiry_date: z.date().optional(),
  skills: z.array(z.string()),
  media: z.array(z.string()).optional(),
});

export const updateCandidateProfileValidation = z.object({
  experience_level: z.string().optional(),
  employment_type: z.string().optional(),
  skills: z.array(z.string()).optional(),
  work_model: z.string().optional(),
  work_permit: z.string().optional(),
  bill_rate: z.coerce.number().optional(),
  payment_type: z.string().optional(),
  relocation: z.boolean().optional(),
  video_resume: z.string().optional(),
  availability_date: z.string().optional(),
  engagement_type: z.string().optional(),
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

export const updateCandidateSchedule = z.object({
  schedules: z.array(availabilitySlot),
});
