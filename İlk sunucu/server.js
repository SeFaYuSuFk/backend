const http = require('http');

const server = http.createServer((req, res) => {
  console.log('İstek geldi:', req.method, req.url);

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify({
    message: 'Merhaba Dünya!',
    success: true
  }));
});

server.listen(3000, () => {
  console.log('Sunucu 3000 portunda çalışıyor...');
});