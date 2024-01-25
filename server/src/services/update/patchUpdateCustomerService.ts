import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient'
import HttpException from '../../middleware/errors/HttpException';
import { emailEmpty } from '../validations/email/emailEmpty';
import { emailFormat } from '../validations/email/emailFormat';
import { cpfValidate } from '../validations/cpf/cpfValidate';



export const patchUpdateCustomerService = async (id: string, data: any) => {
  await Promise.all([
    emailEmpty(data.email),
    emailFormat(data.email),
    cpfValidate(data.cpf),
  ]);
  
  const updateCustomer = await prisma.customer.update({
    where: { id },
    data,
    select: {
      name: true,
      email: true,
      cpf: true,
    }
  });

  if(!updateCustomer) throw new HttpException(httpStatus.NO_CONTENT, "Cliente não pode ser atualizado!")

  return { updateCustomer, success: true };
}