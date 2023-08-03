import { ValidationError } from 'joi';
export interface NoteItem {
  id: string;
  created: string;
  title: string;
  category: string;
  content: string;
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

export interface ReceivedNoteItem  {
  title: string;
  category: string;
  content: string;
  archive: boolean; 
}

export type UpdateNoteItem = Partial<ReceivedNoteItem>;