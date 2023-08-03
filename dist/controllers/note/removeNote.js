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
const note_1 = __importDefault(require("../../models/note"));
const helpers_1 = require("../../helpers");
const helpers_2 = require("../../helpers");
const removeNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield note_1.default.removeNote(id);
    if (!result) {
        throw (0, helpers_2.HttpError)(404, "Not found");
    }
    res.json(result);
});
exports.default = (0, helpers_1.ctrlWrapper)(removeNote);
//# sourceMappingURL=removeNote.js.map