import mockedNotes, { NoteItem } from "../../db/notes";

    const getAllNotes = async (): Promise<NoteItem[]> => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(mockedNotes);
          }, 500);
        });
      };

export default getAllNotes;