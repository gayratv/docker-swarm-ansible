import express from 'express';

import { writeFileSync, readFileSync } from 'fs';
import fse from 'fs-extra';

const app = express();
const port = 3000;
// http://localhost:3000/set?id=1
app.get('/set', async (request, response) => {
  await fse.ensureDir('data');
  writeFileSync('./data/req', request.query.id as string);
  response.send('done!');
});
app.get('/get', (request, response) => {
  const res = readFileSync('./data/req');
  response.send(res.toString() + '\n');
});
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
