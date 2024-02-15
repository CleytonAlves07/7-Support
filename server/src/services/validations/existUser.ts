import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient';
import HttpException from '../../middleware/errors/HttpException';
import { determineUserRole } from '../register/determineUserRole';

type Entity = 'customer' | 'manager' | 'mechanic';

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export const existUser = async (email: string): Promise<User | null> => {
  try {
    const role = determineUserRole(email) as Entity;;
    let existUser: User | null;

    if (role === "customer") {
      existUser = await prisma.customer.findUnique({
        where: {
          email,
        },
      });
    } else if (role === "manager") {
      existUser = await prisma.manager.findUnique({
        where: {
          email,
        },
      });
    } else if (role === "mechanic") {
      existUser = await prisma.mechanic.findUnique({
        where: {
          email,
        },
      });
    } else {
      throw new HttpException(httpStatus.NOT_FOUND, 'Usuário não encontrado!')
    }

    return existUser;

  } catch (error) {
    throw new HttpException(httpStatus.NOT_FOUND, 'Usuário não encontrado!')
  }
  
}
