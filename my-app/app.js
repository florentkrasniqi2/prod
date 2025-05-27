const express = require('express');
const app = express();
const port = 7000;

app.get('/', (req, res) => {
  res.send('<h1>Hello, Florent</h1><h2> Projekti ne javascript</h2>');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});