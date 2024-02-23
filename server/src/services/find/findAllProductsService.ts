import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient'
import HttpException from '../../middleware/errors/HttpException';
import { findProduct } from '../interface/IProduct';



export const findAllProductsService = async (): Promise<findProduct[]> => {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      product: true,
      description: true,
      value: true,
    }
  });
  if (!products) throw new HttpException(httpStatus.BAD_REQUEST, 'Lista de produtos não encontrada!');

  return products;
}