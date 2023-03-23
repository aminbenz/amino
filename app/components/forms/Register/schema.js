import * as z from "zod";

const schema = z.object({
  firstName: z.string().min(2, "Must be at least 2 characters"),
  lastName: z.string().min(2, "Must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Must be at least 6 characters"),
  confirmPassword: z
    .string()
    .min(6, "Must be at least 6 characters")
    .refine((val, data) => val === data.password, "Passwords must match"),
});

export default schema;
