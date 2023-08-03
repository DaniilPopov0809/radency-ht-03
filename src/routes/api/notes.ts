import express from "express";
import  ctrlNotes  from "../../controllers/note";

const router: express.Router = express.Router();

router.get("/",  ctrlNotes.getAllNotes);


export default router;