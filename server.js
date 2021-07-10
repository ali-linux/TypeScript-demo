"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = 'https://jsonplaceholder.typicode.com/todos/1';
const num = 1;
const a = axios_1.default.get(url).then((r) => {
    console.log(r.data);
    console.log("<<NUMBER>>", num);
});
