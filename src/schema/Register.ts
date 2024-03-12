import { z } from "zod";

export const registerSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 characters long" }),
});

export type registerSchemaType = z.infer<typeof registerSchema>;
