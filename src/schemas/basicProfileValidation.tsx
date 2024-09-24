import { z } from "zod";

const addressValidationSchema = z.object({
  address_line: z.string().optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip_code: z.string().optional(),
});

export const createBasicProfileValidation = z.object({
  first_name: z.string(),
  last_name: z.string(),
  phone_number: z.string(),
});

export const updateBasicProfileValidation = z.object({
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  phone_number: z.string().optional(),
  current_address: addressValidationSchema.optional(),
  permanent_address: addressValidationSchema.optional(),
});
