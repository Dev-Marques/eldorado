import { Router } from 'express';
import { CategoryController } from '../controllers/category.controller';
import { DeviceController } from '../controllers/device.controller';

const router = Router();

export default () => {
  const categoryContoller = new CategoryController();
  const deviceController = new DeviceController();
  router.post('/device', deviceController.create);
  router.get('/device', deviceController.list);
  router.delete('/device/:id', deviceController.destroy);

  router.post('/category', categoryContoller.create);
  router.get('/category', categoryContoller.list);
  router.delete('/category/:id', categoryContoller.destroy);

  return router;
};
