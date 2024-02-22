import httpStatus from 'http-status'
import { prisma } from '../../../db/prismaClient'
import HttpException from '../../../middleware/errors/HttpException'




export const existingCPFMechanic = async (cpf: string) => {
    const existingCPF = await prisma.mechanic.findUnique({ where: { cpf: cpf } })
    
  if (existingCPF) {
    throw new HttpException(httpStatus.BAD_REQUEST, 'CPF já cadastrado!')
  }
 
}