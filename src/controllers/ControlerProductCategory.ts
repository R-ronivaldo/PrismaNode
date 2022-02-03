import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export default {
    async index(req: Request, res: Response){
        const productCategory = await prismaClient.productCategory.findMany();

        return res.json(productCategory);
    },
    async create(req: Request, res: Response) {
        const { id_product, id_category } = req.body;

        const productCategory = await prismaClient.productCategory.create({
            data: {
                id_product,
                id_category
            }
        });

        return res.json(productCategory);
    }
}