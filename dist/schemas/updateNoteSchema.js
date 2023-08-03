"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const categories_1 = require("../db/categories");
const updateNoteSchema = joi_1.default.object({
    title: joi_1.default.string().not(""),
    category: joi_1.default.string().valid(...categories_1.categories),
    content: joi_1.default.string().allow(""),
    archive: joi_1.default.boolean(),
}).min(1);
exports.default = updateNoteSchema;
//# sourceMappingURL=updateNoteSchema.js.map