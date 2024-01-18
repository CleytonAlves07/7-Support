import { prisma } from '../../db/prismaClient';



export interface CustomerSignUp {
  name: string;
  email: string;     
  password: string;
  cpf: string;
}

export const customerSignUpService = async ({ email, password, name, cpf }: CustomerSignUp) => {
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