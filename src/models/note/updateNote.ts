import getAllNotes from "./getAllNotes";
import { NoteItem, ReceivedNoteItem } from "../../types";

    const updateNote = async (noteId: string, data:ReceivedNoteItem): Promise<NoteItem | null> => {
        const notes = await getAllNotes();
        const index : number = notes.findIndex(el => el.id === noteId);
        if(index === -1){
            return null;
          }
          notes[index] = {...notes[index], ...data};
        return notes[index];
      };

export default updateNote;