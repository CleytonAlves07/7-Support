import { prisma } from '../../db/prismaClient';
import { hashPassword } from './passwordService';


export const customerSignUp = async ( email:string, password:string, name:string, cpf:string, role:string ) => {
  const hashedPassword = await hashPassword(password);    
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
      