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
// const express = require('express');
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.get('/', (req, res) => {
//   res.send('getting root');
// });
// app.get('/profile', (req, res) => {
//   res.send('getting profile');
// });

// app.post('/profile', (req, res) => {
// console.log(req.body);
// req.query
// req.body
// req.header
// req.params

// res.send('success');
// });
// app.post('/profile', (req, res) => {
//   console.log(req.body);

//   res.status(404).send('success');
// });
// app.use(express.static(__dirname + '/public'));

// app.listen(3000);
