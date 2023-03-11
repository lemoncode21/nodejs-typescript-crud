"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteRepo = void 0;
const Note_1 = require("../model/Note");
class NoteRepo {
    save(note) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Note_1.Note.create({
                    name: note.name,
                    description: note.description,
                });
            }
            catch (error) {
                throw new Error("Failed to create note!");
            }
        });
    }
    update(note) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_note = yield Note_1.Note.findOne({
                    where: {
                        id: note.id,
                    },
                });
                if (!new_note) {
                    throw new Error("Note not found!");
                }
                new_note.name = note.name;
                new_note.description = note.description;
                yield new_note.save();
            }
            catch (error) {
                throw new Error("Failed to create note!");
            }
        });
    }
    delete(noteId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_note = yield Note_1.Note.findOne({
                    where: {
                        id: noteId,
                    },
                });
                if (!new_note) {
                    throw new Error("Note not found!");
                }
                yield new_note.destroy();
            }
            catch (error) {
                throw new Error("Failed to create note!");
            }
        });
    }
    retrieveById(noteId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_note = yield Note_1.Note.findOne({
                    where: {
                        id: noteId,
                    },
                });
                if (!new_note) {
                    throw new Error("Note not found!");
                }
                return new_note;
            }
            catch (error) {
                throw new Error("Failed to create note!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Note_1.Note.findAll();
            }
            catch (error) {
                throw new Error("Failed to create note!");
            }
        });
    }
}
exports.NoteRepo = NoteRepo;
