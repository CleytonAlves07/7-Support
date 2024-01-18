import { prisma } from '../../db/prismaClient';
import { emailEmpty } from '../validations/email/emailEmpty';
import { emailFormat } from '../validations/email/emailFormat';
import { existingEmailCustomer } from '../validations/email/existingEmailCustomer';



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
  ]);
  await prisma.customer.create({
    data: {
      name,
      email,
      password,
      cpf
    }
  })
  return { success: true }
}