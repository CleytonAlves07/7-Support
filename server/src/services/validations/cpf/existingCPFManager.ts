import httpStatus from 'http-status'
import { prisma } from '../../../db/prismaClient'
import HttpException from '../../../middleware/errors/HttpException'




export const existingCPFManager = async (cpf: string) => {
    const existingCPF = await prisma.manager.findUnique({ where: { cpf: cpf } })
    
  if (existingCPF) {
    throw new HttpException(httpStatus.BAD_REQUEST, 'CPF já cadastrado!')
  }
 
}