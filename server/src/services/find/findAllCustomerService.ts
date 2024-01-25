import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient'
import HttpException from '../../middleware/errors/HttpException';
import { findCustomer } from './IfindCustomer';



export const findAllCustomerService = async (): Promise<findCustomer[]> => {
  const customers = await prisma.customer.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      cpf: true,
    }
  });
  if (!customers) throw new HttpException(httpStatus.BAD_REQUEST, 'Lista de clientes não encontrada!');

  return customers;
}