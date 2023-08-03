import { Request, Response } from "express";
import note from "../../models/note";
import { NoteItemStat } from "../../types";
import { ctrlWrapper } from "../../helpers";

const getNotesStats = async (_req: Request, res: Response<NoteItemStat[]>) => {
  const result: NoteItemStat[] = await note.getNotesStats();
  res.json(result);
};

export default ctrlWrapper(getNotesStats);
