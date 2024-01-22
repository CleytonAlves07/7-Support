import httpStatus from 'http-status'
import { prisma } from '../../../db/prismaClient';
import HttpException from '../../../middleware/errors/HttpException';




export const emailNotFound = async (email: string): Promise<void> => {
    const existUser = await prisma.customer.findUnique({
    where: {
        email,
      }
  });
  if (!existUser) {
    throw new HttpException(httpStatus.NOT_FOUND, 'Email do cliente não encontrado!')
  }
}

