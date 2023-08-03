"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError = (status, message) => {
    const error = {
        status,
        message,
    };
    return error;
};
exports.default = HttpError;
//# sourceMappingURL=HttpError.js.map