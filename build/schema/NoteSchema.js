"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNoteSchema = exports.createNoteSchema = void 0;
const zod_1 = require("zod");
exports.createNoteSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string()
            .min(1, { message: "Name must be greater than 1 characters!" }),
        description: zod_1.z
            .string()
            .min(4, { message: "Descrition must be greater than 4 characters!" }),
    }),
});
exports.updateNoteSchema = zod_1.z.object({
    params: zod_1.z.object({ id: zod_1.z.string() }),
    body: zod_1.z
        .object({
        name: zod_1.z
            .string()
            .min(1, { message: "Name must be greater than 1 characters!" }),
        description: zod_1.z
            .string()
            .min(4, { message: "Descrition must be greater than 4 characters!" }),
    })
        .partial(),
});
