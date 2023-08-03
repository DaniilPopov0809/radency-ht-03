import express from "express";
import  ctrlNotes  from "../../controllers/note";
import validateBody from "../../middlewares/validateBody";
import { addNoteSchema, updateNoteSchema } from "../../schemas";

const router: express.Router = express.Router();

router.get("/",  ctrlNotes.getAllNotes);

router.get("/stats",  ctrlNotes.getNotesStats);

router.get("/:id", ctrlNotes.getNoteById);

router.delete("/:id", ctrlNotes.removeNote);

router.post("/", validateBody(addNoteSchema), ctrlNotes.addNote);

router.patch("/:id", validateBody(updateNoteSchema), ctrlNotes.updateNote);

export default router;