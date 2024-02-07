import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient';
import HttpException from '../../middleware/errors/HttpException';
import { hashPassword } from './passwordService';


export const mechanicSignUp = async ( email:string, password:string, name:string, cpf:string, role:string ) => {
  const hashedPassword = await hashPassword(password);    
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
      