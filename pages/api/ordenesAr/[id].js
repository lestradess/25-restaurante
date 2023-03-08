import { PrismaClient } from '@prisma/client';

export default async function handler (req, res) {
    const prisma = new PrismaClient();

    if (req.method === 'POST') {
        const { id } = req.query;
        //console.log(req.query.id)
        //console.log('Actualizando')
        const ordenActualizada = await prisma.orden.update({
            where: {
                id: parseInt(id)
            },
            data: {
                estado: false
            }
        })
        res.status(200).json(ordenActualizada);
    }
}