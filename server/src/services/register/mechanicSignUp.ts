import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient';
import HttpException from '../../middleware/errors/HttpException';
import { hashPassword } from './passwordService';
import { emailEmpty } from '../validations/email/emailEmpty';
import { emailFormat } from '../validations/email/emailFormat';
import { passwordFormat } from '../validations/password/passwordFormat';
import { cpfValidate } from '../validations/cpf/cpfValidate';
import { existingCPFCustomer } from '../validations/cpf/existingCPFCustomer';
import { existingCPFManager } from '../validations/cpf/existingCPFManager';
import { existingCPFMechanic } from '../validations/cpf/existingCPFMechanic';


export const mechanicSignUp = async ( email:string, password:string, name:string, cpf:string, role:string ) => {
  const hashedPassword = await hashPassword(password);
  await Promise.all([
      emailEmpty(email),
      emailFormat(email),
      passwordFormat(password),
      cpfValidate(cpf),
      existingCPFCustomer(cpf),
      existingCPFManager(cpf),
      existingCPFMechanic(cpf),
  ]);
  try {
    await prisma.mechanic.create({
      data: {
        name, 
        email,
        password: hashedPassword,
        cpf,
        role,
      }
    })
  } catch (error) {
    console.log(error);
    throw new HttpException(httpStatus.BAD_REQUEST, 'Usuário não cadastrado')
  }
}
      