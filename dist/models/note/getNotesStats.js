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
const notes_1 = __importDefault(require("../../db/notes"));
const categories_1 = require("../../db/categories");
const helpers_1 = require("../../helpers");
const getNotesStats = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = categories_1.categories.map((el) => {
        return {
            category: el,
            active: (0, helpers_1.countCategory)(notes_1.default, el, false),
            archive: (0, helpers_1.countCategory)(notes_1.default, el, true),
        };
    });
    // simulate async response
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result);
        }, 500);
    });
});
exports.default = getNotesStats;
//# sourceMappingURL=getNotesStats.js.map