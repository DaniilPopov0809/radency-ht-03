import getAllNotes from "./getAllNotes";
import { NoteItem } from "../../types";

const removeNote = async (noteId: string): Promise<NoteItem | null> => {
  const notes = await getAllNotes();
  const index: number = notes.findIndex((el) => el.id === noteId);
  if (index === -1) {
    return null;
  }
  const [result] = notes.splice(index, 1);

  return result;
};

export default removeNote;
