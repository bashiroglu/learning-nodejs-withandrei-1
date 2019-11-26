// const http = require('http');

// const server = http.createServer((req, res) => {
//   const user = {
//     name: 'abdulla',
//     age: 23
//   };

//   res.setHeader('Content-Type', 'application/json');
//   res.end(JSON.stringify(user));
//   //   console.log('I hear you from server');
// });

// server.listen(3000);
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const user = {
    name: 'abdulla',
    age: 23
  };
  res.send(user);
});


app.listen(3000);
