const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const ipAddress = getIpAddress();
  res.send(`Hello from Node.js! Host IP address: ${ipAddress}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function getIpAddress() {
  const interfaces = os.networkInterfaces();
  let ipAddress = 'Unknown';

  // Look for non-internal IPv4 addresses
  Object.keys(interfaces).forEach((iface) => {
    interfaces[iface].forEach((ifaceInfo) => {
      if (!ifaceInfo.internal && ifaceInfo.family === 'IPv4') {
        ipAddress = ifaceInfo.address;
      }
    });
  });

  return ipAddress;
}

