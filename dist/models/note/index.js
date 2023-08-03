"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const getAllNotes_1 = __importDefault(require("./getAllNotes"));
const getNoteById_1 = __importDefault(require("./getNoteById"));
const getNotesStats_1 = __importDefault(require("./getNotesStats"));
const removeNote_1 = __importDefault(require("./removeNote"));
const addNote_1 = __importDefault(require("./addNote"));
const updateNote_1 = __importDefault(require("./updateNote"));
module.exports = {
    getAllNotes: getAllNotes_1.default,
    getNoteById: getNoteById_1.default,
    getNotesStats: getNotesStats_1.default,
    removeNote: removeNote_1.default,
    addNote: addNote_1.default,
    updateNote: updateNote_1.default,
};
//# sourceMappingURL=index.js.map