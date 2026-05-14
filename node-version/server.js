const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Smart System Dashboard</title>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial;
  transition: 0.3s;
}

body {
  background: #f4f6f8;
  color: #1f2937;
}

header {
  background: linear-gradient(135deg, #1f2a40, #111827);
  color: white;
  padding: 25px;
  text-align: center;
}

.container {
  max-width: 1000px;
  margin: auto;
  padding: 30px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 14px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.card {
  background: white;
  padding: 18px;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

.big {
  font-size: 26px;
  font-weight: bold;
  margin-top: 8px;
}

.badge {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 999px;
  background: #22c55e;
  color: white;
  font-size: 12px;
}

.progress {
  width: 100%;
  height: 10px;
  background: #e5e7eb;
  border-radius: 20px;
  margin-top: 10px;
}

.progress-bar {
  width: 68%;
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
}
</style>
</head>

<body>

<header>
  <h1>Smart System Dashboard</h1>
  <p>Node.js Deployment Version</p>
</header>

<div class="container">

  <div class="topbar">
    <div>Waktu Server: ${new Date().toLocaleString()}</div>
  </div>

  <div class="grid">

    <div class="card">
      <h3>Total Pengguna Aktif</h3>
      <div class="big">1.284</div>
      <span class="badge">LIVE</span>
    </div>

    <div class="card">
      <h3>Load Server</h3>
      <div class="big">68%</div>
      <div class="progress">
        <div class="progress-bar"></div>
      </div>
    </div>

    <div class="card">
      <h3>Aktivitas Sistem</h3>
      <p>User login, update data, backup otomatis berjalan normal.</p>
    </div>

    <div class="card">
      <h3>Status Sistem</h3>
      <p>Semua layanan stabil</p>
      <span class="badge">STABLE</span>
    </div>

  </div>

</div>

</body>
</html>
  `);
});

app.get('/health', (req, res) => {
  res.json({
    status: "OK",
    app: "Smart System Dashboard",
    uptime: process.uptime(),
    time: new Date()
  });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});