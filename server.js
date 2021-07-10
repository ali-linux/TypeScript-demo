"use strict";
// import axios from 'axios';
// const url: string = 'https://jsonplaceholder.typicode.com/todos/1'
// const num:Number = 1
// const a = axios.get(url).then((r) => {
//   console.log(r.data)
//   console.log("<<NUMBER>>", num)
// })
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = process.env.port || 3000;
const c = (a, b) => a + b;
app.get('/', (req, res, next) => {
    console.log(c(12, 55));
    res.send('Hello world!');
});
app.listen(PORT, () => {
    console.log(`Listing on port ${PORT}!`);
});
