import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient';
import HttpException from '../../middleware/errors/HttpException';
import { findProduct } from '../interface/IProduct';

export const findProductsByNameService = async (productName: string): Promise<findProduct | findProduct[]> => {
  console.log('Service:', productName);
  
  const products = await prisma.product.findMany({
  where: {
    product: {
      contains: productName,
    },
  },
  select: {
    id: true,
    product: true,
    description: true,
    value: true,
  },
});

  if (!products || products.length === 0) {
    throw new HttpException(httpStatus.NOT_FOUND, `Nenhum produto com o nome ${productName} encontrado`);
  }

  return products;
};
