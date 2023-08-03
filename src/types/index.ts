export interface NoteItem {
  id: string;
  title: string;
  created: string;
  category: string;
  content: string;
  dates: string[];
  archive: boolean;
}

export interface Error {
  status: number;
  message: string;
}

export interface NoteItemStat {
  category: string;
  active: number;
  archive: number;
}
