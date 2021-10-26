import Routers from './routers';
import { Express } from 'express';

export default (app: Express) => {
  const router = Routers();
  app.use('/api', router);
};
