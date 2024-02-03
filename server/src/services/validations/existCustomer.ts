import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient';
import HttpException from '../../middleware/errors/HttpException';

export interface customerFull {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export const existUser = async (email: string): Promise<customerFull | null> => {
  try {
    const existUser = await prisma.customer.findUnique({
    where: {
        email,
      }
  });
  return existUser
  } catch (error) {
    throw new HttpException(httpStatus.NOT_FOUND, 'Usuário não encontrado!')
  }
  
}