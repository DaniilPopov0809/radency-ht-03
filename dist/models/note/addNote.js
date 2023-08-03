"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAllNotes_1 = __importDefault(require("./getAllNotes"));
const helpers_1 = require("../../helpers");
const nanoid_1 = require("nanoid");
const addNote = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield (0, getAllNotes_1.default)();
    const newNote = Object.assign({ id: (0, nanoid_1.nanoid)(), created: (0, helpers_1.getCurrentDate)() }, body);
    notes.push(newNote);
    return newNote;
});
exports.default = addNote;
//# sourceMappingURL=addNote.js.map