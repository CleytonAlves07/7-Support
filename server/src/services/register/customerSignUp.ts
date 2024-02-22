import { prisma } from '../../db/prismaClient';
import { cpfValidate } from '../validations/cpf/cpfValidate';
import { existingCPFCustomer } from '../validations/cpf/existingCPFCustomer';
import { existingCPFManager } from '../validations/cpf/existingCPFManager';
import { existingCPFMechanic } from '../validations/cpf/existingCPFMechanic';
import { emailEmpty } from '../validations/email/emailEmpty';
import { emailFormat } from '../validations/email/emailFormat';
import { passwordFormat } from '../validations/password/passwordFormat';
import { hashPassword } from './passwordService';


export const customerSignUp = async ( email:string, password:string, name:string, cpf:string, role:string ) => {
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
  await prisma.customer.create({
      data: {
        name, 
        email,
        password: hashedPassword,
        cpf,
        role,
      }
    })
}
      