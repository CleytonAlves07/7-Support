import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient';
import HttpException from '../../middleware/errors/HttpException';
import { findProduct } from '../interface/IProduct';


export const findByIdProductService = async (id: string): Promise<findProduct | null> => {
  const customer = await prisma.product.findUnique({
    where: { id },
    select: {
      id: true,
      product: true,
      description: true,
      amount: true,
    }
  });

  if (!customer) throw new HttpException(httpStatus.NOT_FOUND, "Produto não encontrado!");
  
  return customer;
  
};