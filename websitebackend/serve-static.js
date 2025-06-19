const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Serve static files from the parent directory
app.use(express.static(path.join(__dirname, '..')));

// Serve the admin panel
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Static website server running at http://localhost:${PORT}`);
  console.log(`Admin panel available at http://localhost:${PORT}/admin`);
});