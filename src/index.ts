import http from 'node:http';
import { networkInterfaces } from 'node:os';
import { IncomingMessage, ServerResponse } from 'node:http';

const port = 3000;

const requestHandler = (request: IncomingMessage, res: ServerResponse) => {
  const IPs = getIPs();
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify(IPs));
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

const getIPs = () => {
  const nets = networkInterfaces();
  const results: Record<string, any> = {};

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        if (!results[name]) {
          results[name] = [];
        }
        results[name].push(net.address);
      }
    }
  }
  results['descr'] = 'This is IP app from Docker';
  return results;
};
