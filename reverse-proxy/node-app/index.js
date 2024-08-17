// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/healthcheck', (req, res) => {
  res.send('Hello from Node.js app reverse proxy');
});

app.get('/api/data', (req, res) => {
  res.json({
    message: 'Hello from Node.js!',
    items: [1, 2, 3, 4, 5]
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});