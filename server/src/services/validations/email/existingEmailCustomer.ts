import httpStatus from 'http-status'
import { prisma } from '../../../db/prismaClient'
import HttpException from '../../../middleware/errors/HttpException'




export const existingEmailCustomer = async (email: string): Promise<void> => {
    const existingEmail = await prisma.customer.findUnique({ where: { email: email } })
    
  if (existingEmail) {
    throw new HttpException(httpStatus.BAD_REQUEST, 'Email do cliente já cadastrado!')
  }
 
}