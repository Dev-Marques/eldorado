import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Category } from '../../entity/Category';
import { Device } from '../../entity/Device';
export class DeviceController {
  async create(req: Request, res: Response): Promise<Response> {
    const { category, color, partNumber } = req.body;
    const deviceRepository = getRepository(Device);
    const categoryRepository = getRepository(Category);
    const device = new Device();

    const deviceCategory = await categoryRepository.findOne({ where: { id: category } });
    if (deviceCategory) {
      device.category = deviceCategory;
      device.color = color;
      device.partNumber = partNumber;
      const errors = await validate(device);

      if (errors.length > 0) {
        return res.status(400).send(errors);
      }
      const deviceCreate = await deviceRepository.save(device);
      return res.status(201).send(deviceCreate);
    }

    return res.status(422).send({ error: 'Invalid category' });
  }

  async list(req: Request, res: Response): Promise<Response> {
    const device = await getRepository(Device).find();
    return res.status(200).send(device);
  }

  async destroy(req: Request, res: Response): Promise<Response> {
    const deviceRepository = getRepository(Device);
    const device = await deviceRepository.findOne({ where: { id: req.params.id } });
    if (device === undefined) {
      return res.status(404).send({ error: 'Device not found' });
    }
    deviceRepository.delete(req.params.id);

    return res.sendStatus(204);
  }
}
