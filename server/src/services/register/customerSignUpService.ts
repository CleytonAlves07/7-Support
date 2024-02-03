import { prisma } from '../../db/prismaClient';
import { cpfValidate } from '../validations/cpf/cpfValidate';
import { existingCPFCustomer } from '../validations/cpf/existingCPFCustomer';
import { emailEmpty } from '../validations/email/emailEmpty';
import { emailFormat } from '../validations/email/emailFormat';
import { existingEmailCustomer } from '../validations/email/existingEmailCustomer';
import { passwordFormat } from '../validations/password/passwordFormat';
import { hashPassword } from './passwordService';



export interface CustomerSignUp {
  name: string;
  email: string;     
  password: string;
  cpf: string;
}

export const customerSignUpService = async ({ email, password, name, cpf }: CustomerSignUp) => {
  await Promise.all([
    emailEmpty(email),
    emailFormat(email),
    existingEmailCustomer(email),
    cpfValidate(cpf),
    existingCPFCustomer(cpf),
    passwordFormat(password),
  ]);
  const hashedPassword = await hashPassword(password);
  try {
    console.log("name:  ", name);
    
    await prisma.customer.create({
    data: {
      name, 
      email,
      password: hashedPassword,
      cpf
    }
  })
  return { success: true }
  } catch (error) {
    console.error('Erro ao criar o cliente:', error)
    throw error;
  }
}
