import { Request, Response } from "express";
import note from "../../models/note"
import { NoteItem } from "../../types";
import { ctrlWrapper } from "../../helpers";


const addNote = async (req: Request, res: Response<NoteItem>) => {
    const result: NoteItem = await note.addNote(req.body);
    res.status(201).json(result);
};

export default ctrlWrapper(addNote) ;