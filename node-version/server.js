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
}

body {
  background: #f4f6f8;
  color: #333;
}

header {
  background: #1f2a40;
  color: white;
  padding: 20px;
  text-align: center;
}

.container {
  padding: 30px;
  max-width: 1000px;
  margin: auto;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.badge {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 20px;
  background: #007bff;
  color: white;
  font-size: 12px;
}

.time-box {
  font-size: 14px;
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
    <div class="time-box">
      Server Time: ${new Date().toLocaleString()}
    </div>
  </div>

  <div class="grid">

    <div class="card">
      <h3>System Status</h3>
      <p>Monitoring system health</p>
      <div class="badge">ACTIVE</div>
    </div>

    <div class="card">
      <h3>User Activity</h3>
      <p>Tracking user interactions</p>
      <div class="badge">STABLE</div>
    </div>

    <div class="card">
      <h3>Server Info</h3>
      <p>Node.js runtime environment</p>
      <div class="badge">RUNNING</div>
    </div>

    <div class="card">
      <h3>Deployment</h3>
      <p>Cloud platform status</p>
      <div class="badge">ONLINE</div>
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
    service: "Smart System Dashboard",
    uptime: process.uptime(),
    time: new Date()
  });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});