import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string()
    .max(20, { message: 'Password must be less than 20 characters' })
    .optional(),
});

export const UserValidation = {
  validate: userValidationSchema,
};
