import httpStatus from 'http-status'
import HttpException from '../../../middleware/errors/HttpException';
import { prisma } from '../../../db/prismaClient';

export const emailNotFound = async (email: string): Promise<void> => {
  const existCustomer = await prisma.customer.findUnique({ 
    where: {
        email,
      }
    });
  if (!existCustomer) {
    throw new HttpException(httpStatus.NOT_FOUND, 'Email do cliente não encontrado!')
  }
}

