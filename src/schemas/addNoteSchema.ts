import Joi from "joi";
import { categories } from "../db/categories";

const addNoteSchema = Joi.object({
    title: Joi.string().not("").required(),
    category: Joi.string().valid(...categories).required(),
    content: Joi.string().allow(""),
    archive: Joi.boolean().required(),
})

export default addNoteSchema;