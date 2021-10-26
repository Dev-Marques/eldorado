import express from 'express';
import 'reflect-metadata';
import morgan from 'morgan';
import cors from 'cors';
import buildRouters from './Api/routes';
import { createConnection } from 'typeorm';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
buildRouters(app);

createConnection().then((_connection) => {
  app.listen(PORT, () => {
    console.log(`Running in port ${PORT}`);
  });
});
