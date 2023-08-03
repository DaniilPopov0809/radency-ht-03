import Joi from "joi";
import { categories } from "../db/categories";
import { UpdateNoteItem } from "../types";

const updateNoteSchema: Joi.ObjectSchema<UpdateNoteItem> = Joi.object({
  title: Joi.string().not(""),
  category: Joi.string().valid(...categories),
  content: Joi.string().allow(""),
  archive: Joi.boolean(),
}).min(1);

export default updateNoteSchema;
