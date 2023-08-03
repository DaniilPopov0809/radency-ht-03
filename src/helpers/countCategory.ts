import { NoteItem } from "types";

const countCategory = (data: NoteItem[], category:string, param:boolean): number => {
  return data.reduce((acc: number, cur: NoteItem) => {
    if (cur.category === category && cur.archive === param) {
      return (acc += 1);
    }
    return acc;
  }, 0);
};

export default countCategory;