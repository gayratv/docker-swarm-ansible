import http from 'node:http';
import { networkInterfaces } from 'node:os';
import * as process from 'process';
const port = 3000;
const requestHandler = (request, res) => {
    const IPs = getIPs() + `\n\n`;
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    // res.end(JSON.stringify(IPs));
    res.end(IPs);
};
const server = http.createServer(requestHandler);
server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
const getIPs = () => {
    const nets = networkInterfaces();
    const results = {};
    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            // if (net.family === 'IPv4' && !net.internal) {
            if (net.family === 'IPv4') {
                if (!results[name]) {
                    results[name] = [];
                }
                results[name].push(net.address);
            }
        }
    }
    results['descr'] = 'This is IP app from Docker1';
    // Reflect.ownKeys(process.env).forEach((key: string) => {
    //   console.log(process.env[key]);
    // });
    results['port'] = process.env.PORT_PARAM ?? 'null';
    return JSON.stringify(results);
};
//# sourceMappingURL=index.js.map