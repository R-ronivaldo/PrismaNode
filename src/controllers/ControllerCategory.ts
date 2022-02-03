import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export default {
    async index(req: Request, res: Response){
        const categories = await prismaClient.category.findMany();

        return res.json(categories);
    },
    async create(req: Request, res: Response) {
        const { name } = req.body;

        const category = await prismaClient.category.create({
            data: {
                name
            }
        });

        return res.json(category);
    }
}