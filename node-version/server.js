const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello dari Node.js');
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(3000, () => {
  console.log('Server jalan di port 3000');
});