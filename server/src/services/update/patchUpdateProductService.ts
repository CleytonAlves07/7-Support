import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient'
import HttpException from '../../middleware/errors/HttpException';
import { findProduct } from '../interface/IProduct';

export const patchUpdateProductService = async (id: string, data: findProduct) => {
  // await Promise.all([
    
  // ]);
  
  const updateProduct = await prisma.product.update({
    where: { id },
    data,
    select: {
      product: true,
      description: true,
      amount: true,
    }
  });

  if(!updateProduct) throw new HttpException(httpStatus.NO_CONTENT, "Produto não foi atualizado!")

  return { updateProduct, success: true };
}