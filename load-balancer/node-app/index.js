// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
let count = 0
app.get('/', (req, res) => {
  console.log('count',count++)
  res.send({message: 'Hello from Node.js app load balancer'});
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});