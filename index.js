const express = require('express');
const app = express();
const port = 3000;

app.get('/test', (req, res) => {
  res.send('Hello AbdulSamad! Your JSON file and server are working.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});