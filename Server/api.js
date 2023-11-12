const express = require('express');
const app = express();

const hostname = 'localhost';
const port = 3200;

app.get("/api", (req, res) => {
  res.status(200).type('text').send("here we go");
});

app.listen(port, hostname, () => {
  console.log(`Server is listening http://${hostname}:${port}`);
});
