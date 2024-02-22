import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient'
import HttpException from '../../middleware/errors/HttpException';


export const deleteProductService = async (id: string) => {

  const existingProduct = await prisma.product.findUnique({
    where: { id },
    });

  if(!existingProduct) throw new HttpException(httpStatus.NO_CONTENT, "Produto não encontrado!")
  
  await prisma.product.delete({
    where: { id },
  })
  return { success: true };
}