const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Node App</title>
        <style>
          body {
            font-family: Arial;
            text-align: center;
            background: #eef2f3;
            padding: 50px;
          }
          .box {
            background: white;
            padding: 30px;
            border-radius: 10px;
            display: inline-block;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          }
          h1 { color: #333; }
        </style>
      </head>
      <body>
        <div class="box">
          <h1>🚀 Node.js App Running</h1>
          <p>Deploy via Railway</p>
          <p>Status: <b>Online ✅</b></p>
        </div>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'Node.js Railway' });
});

app.listen(PORT, () => {
  console.log(`Server jalan di port ${PORT}`);
});