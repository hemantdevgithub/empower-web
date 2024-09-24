import z from "zod";
export const createWebcastValidationSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  subCategory: z.string(),
  videoUrl: z.string(),
});

// export const createWebcastValidationSchema = z.object({
//   title: z.string().min(10),
//   description: z.string().min(20),
//   video: z.record(z.instanceof(File)).or(z.string()),
// });
