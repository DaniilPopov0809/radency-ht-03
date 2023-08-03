"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentDate = void 0;
const getCurrentDate = () => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    return `${months[month]} ${day}, ${year}`;
};
exports.getCurrentDate = getCurrentDate;
//# sourceMappingURL=getCurrentDate.js.map