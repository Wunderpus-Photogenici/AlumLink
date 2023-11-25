const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.send('hello world from express');
});

app.listen(3000);
