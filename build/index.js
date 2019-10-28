"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function p1(a) {
    if (a) {
        return a.map((x) => `(${x})`).join(' ');
    }
    return '';
}
exports.p1 = p1;
