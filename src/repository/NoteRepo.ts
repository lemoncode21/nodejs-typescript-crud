import { Note } from "../model/Note";

interface INoteRepo {
  save(note: Note): Promise<void>;
  update(note: Note): Promise<void>;
  delete(noteId: number): Promise<void>;
  retrieveById(noteId: number): Promise<Note>;
  retrieveAll(): Promise<Note[]>;
}

export class NoteRepo implements INoteRepo {

  async save(note: Note): Promise<void> {
    try {
      await Note.create({
        name: note.name,
        description: note.description,
      });
    } catch (error) {
      throw new Error("Failed to create note!");
    }
  }
  async update(note: Note): Promise<void> {
    try {
      const new_note = await Note.findOne({
        where: {
          id: note.id,
        },
      });
      if (!new_note) {
        throw new Error("Note not found!");
      }
      new_note.name = note.name;
      new_note.description = note.description;

      await new_note.save();
    } catch (error) {
      throw new Error("Failed to create note!");
    }
  }
  async delete(noteId: number): Promise<void> {
    try {
      const new_note = await Note.findOne({
        where: {
          id: noteId,
        },
      });
      if (!new_note) {
        throw new Error("Note not found!");
      }

      await new_note.destroy();
    } catch (error) {
      throw new Error("Failed to create note!");
    }
  }
  async retrieveById(noteId: number): Promise<Note> {
    try {
      const new_note = await Note.findOne({
        where: {
          id: noteId,
        },
      });
      if (!new_note) {
        throw new Error("Note not found!");
      }
      return new_note;
    } catch (error) {
      throw new Error("Failed to create note!");
    }
  }
  async retrieveAll(): Promise<Note[]> {
    try {
     return await Note.findAll();
    } catch (error) {
      throw new Error("Failed to create note!");
    }
  }
  
}
