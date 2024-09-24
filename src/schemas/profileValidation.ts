import { Gender, Pwd, U_PERconst } from "@/constants/profile.constant";
import { z } from "zod";

export const updateUserProfileValidation = z.object({
  // personal info
  name: z.string().optional(),
  phoneNumber: z.string().optional(),
  email: z.string().email().optional(),

  // people with barriers category
  pwdType: z.array(z.enum(["", ...Pwd] as [string, ...string[]]).optional()).optional(),
  pwdProof: z.any().optional(),
  isMilitaryVeterans: z.boolean().optional(),
  militaryVeteransProof: z.any().optional(),
  isLinguisticBarrier: z.boolean().optional(),
  linguisticBarrierProof: z.any().optional(),
  U_PERType: z.array(z.enum(["", ...U_PERconst] as [string, ...string[]]).optional()).optional(),
  U_PERtYPEProof: z.any().optional(),
  gender: z.enum(["", ...Gender] as [string, ...string[]]),
  genderProof: z.any().optional(),
  isIncarcerated: z.boolean().optional(),
  incarceratedProof: z.any().optional(),

  // collateral information
  companyName: z.string(),
  website: z.string(),
  leadership: z.string(),
  revenue: z.coerce.number(),
  companyUSP: z.string(),
  aboutCompany: z.string(),
});
