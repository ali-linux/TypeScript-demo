import axios from 'axios';
const url: string = 'https://jsonplaceholder.typicode.com/todos/1'
const num:Number = 1
const a = axios.get(url).then((r) => {
  console.log(r.data)
  console.log("<<NUMBER>>", num)
})
