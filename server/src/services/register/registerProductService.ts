import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient';
import HttpException from '../../middleware/errors/HttpException';
import { createProduct } from '../interface/IProduct';


export const registerProductService = async ({ product, description, amount }: createProduct ) => {
  // await Promise.all([
     
  // ]);

  try {
    await prisma.product.create({
      data: {
        product,
        amount,
        description,
      }
    })
  } catch (error) {    
    console.log(error);
    throw new HttpException(httpStatus.BAD_REQUEST, 'Produto não cadastrado')
  }

  return { success: true }
}
      