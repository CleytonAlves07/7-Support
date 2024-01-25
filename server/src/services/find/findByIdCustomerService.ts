import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient';
import HttpException from '../../middleware/errors/HttpException';
import { findCustomer } from './IfindCustomer';


export const findByIdCustomerService = async (id: string): Promise<findCustomer | null> => {
  const customer = await prisma.customer.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      cpf: true,
    }
  });

  if (!customer) throw new HttpException(httpStatus.NOT_FOUND, "Cliente não encontrado!");
  
  return customer;
  
};