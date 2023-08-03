import { Request, Response } from "express";
import note from "../../models/note";
import { NoteItem } from "../../types";
import { ctrlWrapper } from "../../helpers";
import { HttpError } from "../../helpers";

const removeNote = async (req: Request, res: Response<NoteItem>) => {
  const { id } = req.params;
  const result: NoteItem | null = await note.removeNote(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

export default ctrlWrapper(removeNote);
