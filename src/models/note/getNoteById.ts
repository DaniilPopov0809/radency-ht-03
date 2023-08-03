import getAllNotes from "./getAllNotes";
import { NoteItem } from "../../types";

const getNoteById = async (noteId: string): Promise<NoteItem | null> => {
  const notes = await getAllNotes();
  const result: NoteItem | undefined = notes.find((el) => el.id === noteId);
  return result || null;
};

export default getNoteById;
