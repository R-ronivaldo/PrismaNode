import { Request, Response } from 'express';
import { prismaClient  } from '../database/prismaClient';

export default {
    async index(req: Request, res: Response) {

        const products = await prismaClient.product.findMany();

        return res.json(products);
    },
    async create(req: Request, res: Response) {
        const { name, description } = req.body

        const product = await prismaClient.product.create({
            data: {
                name,
                description
            }
        });

        return res.json(product);
    }
}