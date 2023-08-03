import express from "express";
import  ctrlNotes  from "../../controllers/note";

const router: express.Router = express.Router();

router.get("/",  ctrlNotes.getAllNotes);

router.get("/stats",  ctrlNotes.getNotesStats);

router.get("/:id", ctrlNotes.getNoteById);

export default router;