import { NoteItem } from "../../types";
import getAllNotes from "./getAllNotes";
import { ReceivedNoteItem } from "../../types";
import { getCurrentDate } from "../../helpers";
import { nanoid } from "nanoid";

const addNote = async (body: ReceivedNoteItem): Promise<NoteItem> => {
  const notes = await getAllNotes();
  const newNote: NoteItem = {
    id: nanoid(),
    created: getCurrentDate(),
    ...body,
  };
  notes.push(newNote);

  return newNote;
};

export default addNote;
