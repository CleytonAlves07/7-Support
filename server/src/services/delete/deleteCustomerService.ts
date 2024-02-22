import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient'
import HttpException from '../../middleware/errors/HttpException';


export const deleteCustomerService = async (id: string) => {

  const existingCustomer = await prisma.customer.findUnique({
    where: { id },
    });

  if(!existingCustomer) throw new HttpException(httpStatus.NO_CONTENT, "Cliente não encontrado!")
  
  await prisma.customer.delete({
    where: { id },
  })
  return { success: true };
}