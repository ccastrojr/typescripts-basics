import express from 'express';
import { helloWorld } from './routes';

const app = express();

app.get('/test', (req, res) => {
  helloWorld(req, res);
})

app.listen(3333);