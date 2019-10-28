"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_not_letter_1 = __importDefault(require("is-not-letter"));
const x = 'abc';
function plus5(a) {
    return a + 5;
}
console.log(`${x}: ${is_not_letter_1.default(x) + 10}`);
console.log(plus5(is_not_letter_1.default(x)));
const y = is_not_letter_1.default(x);
