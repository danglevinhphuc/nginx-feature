// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const TIME_OUT = 5 * 1000 // 5s

app.get('/healthcheck', (req, res) => {
  res.send('Hello from Node.js app cache');
});

app.get('/api/data', (req, res) => {
  setTimeout(() => {
    res.json({
      message: 'Hello from Node.js!',
      items: [1, 2, 3, 4, 5]
    });
  }, TIME_OUT);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});