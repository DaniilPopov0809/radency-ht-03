import { Request, Response } from "express";
import note from "../../models/note"
import { NoteItem } from "../../db/notes";
import { ctrlWrapper } from "../../helpers";

const getAllNotes = async (_req: Request, res: Response<NoteItem[]>) => {
    const result: NoteItem[] = await note.getAllNotes();
    res.json(result);
};

export default ctrlWrapper(getAllNotes);