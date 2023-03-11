import { z } from "zod";

export const createNoteSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, { message: "Name must be greater than 1 characters!" }),
    description: z
      .string()
      .min(4, { message: "Descrition must be greater than 4 characters!" }),
  }),
});

export const updateNoteSchema = z.object({
  params: z.object({ id: z.string() }),
  body: z
    .object({
      name: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
      description: z
        .string()
        .min(4, { message: "Descrition must be greater than 4 characters!" }),
    })
    .partial(),
});
