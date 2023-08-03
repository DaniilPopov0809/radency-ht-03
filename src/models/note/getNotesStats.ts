import mockedNotes from "../../db/notes";
import { categories } from "../../db/categories";
import { NoteItemStat } from "../../types";
import  {countCategory}  from "../../helpers";

const getNotesStats = async (): Promise<NoteItemStat[]> => {
  const result = categories.map((el) => {
    return {
      category: el,
      active:   countCategory(mockedNotes, el, false),
      archive:  countCategory(mockedNotes, el, true),
    };
  });
  return result;
  // simulate async response
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(result);
  //   }, 500);
  // });
};

export default getNotesStats;
