"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const note_1 = __importDefault(require("../../controllers/note"));
const validateBody_1 = __importDefault(require("../../middlewares/validateBody"));
const schemas_1 = require("../../schemas");
const router = express_1.default.Router();
router.get("/", note_1.default.getAllNotes);
router.get("/stats", note_1.default.getNotesStats);
router.get("/:id", note_1.default.getNoteById);
router.delete("/:id", note_1.default.removeNote);
router.post("/", (0, validateBody_1.default)(schemas_1.addNoteSchema), note_1.default.addNote);
router.patch("/:id", (0, validateBody_1.default)(schemas_1.updateNoteSchema), note_1.default.updateNote);
exports.default = router;
//# sourceMappingURL=notes.js.map