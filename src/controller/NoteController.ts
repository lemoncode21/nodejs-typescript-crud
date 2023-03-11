import { Request, Response } from "express";
import { Note } from "../model/Note";
import { NoteRepo } from "../repository/NoteRepo";

class NoteController {
  async create(req: Request, res: Response) {
    try {
      const new_note = new Note();
      new_note.name = req.body.name;
      new_note.description = req.body.description;

      await new NoteRepo().save(new_note);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created note!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      await new NoteRepo().delete(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully deleted note!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_note = await new NoteRepo().retrieveById(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched note by id!",
        data: new_note,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const new_note = await new NoteRepo().retrieveAll();

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched all note data!",
        data: new_note,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_note = new Note();

      new_note.id = id;
      new_note.name = req.body.name;
      new_note.description = req.body.description;

      await new NoteRepo().update(new_note);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated note data!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new NoteController()
