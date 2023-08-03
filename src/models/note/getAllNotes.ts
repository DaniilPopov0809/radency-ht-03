import mockedNotes from "../../db/notes";
import { NoteItem } from "../../types";

const getAllNotes = async (): Promise<NoteItem[]> => {
  return mockedNotes;
  // simulate async response
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(mockedNotes);
//     }, 500);
//   });
};

export default getAllNotes;
