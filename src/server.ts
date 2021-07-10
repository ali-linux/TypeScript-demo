// import axios from 'axios';
// const url: string = 'https://jsonplaceholder.typicode.com/todos/1'
// const num:Number = 1
// const a = axios.get(url).then((r) => {
//   console.log(r.data)
//   console.log("<<NUMBER>>", num)
// })

import express from 'express'

const app = express();
const PORT = process.env.port || 3000
const c = (a: number, b: number): number => a+b
app.get('/', (req, res, next) => {
  console.log(c(12, 55));
  res.send('Hello world!');
});

app.listen(PORT, () => {
  console.log(`Listing on port ${PORT}!`)
})
