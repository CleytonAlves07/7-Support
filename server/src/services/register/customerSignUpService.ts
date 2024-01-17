import { prisma } from '../../db/prismaClient';



export interface CustomerSignUp {
  email: string;     
  password: string;
  name: string;
  cpf: string;
}

export const customerSignUpService = async ({ email, password, name, cpf }: CustomerSignUp) => {
  await prisma.customer.create({
    data: {
      email,
      password,
      name,
      cpf
    }
  })
  return { success: true }
}