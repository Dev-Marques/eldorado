import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Category } from '../../entity/Category';

export class CategoryController {
  async create(req: Request, res: Response): Promise<Response> {
    const categoryRepository = getRepository(Category);
    const { name } = req.body;
    const categoryCreate = categoryRepository.create({ name });
    const errors = await validate(categoryCreate);
    if (errors.length > 0) {
      return res.status(400).send({ errors: errors });
    }

    const category = await categoryRepository.save(categoryCreate);

    return res.status(201).send(category);
  }

  async list(req: Request, res: Response): Promise<Response> {
    const category = await getRepository(Category).find();
    return res.status(200).send(category);
  }

  async destroy(req: Request, res: Response): Promise<Response> {
    const categoryRepository = getRepository(Category);
    const category = await categoryRepository.findOne({ where: { id: req.params.id } });
    if (category === undefined) {
      return res.status(404).send({ error: 'Category not found' });
    }
    categoryRepository.delete(req.params.id);

    return res.sendStatus(204);
  }
}
