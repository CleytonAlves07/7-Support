import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient';
import HttpException from '../../middleware/errors/HttpException';
import { createMaintenance } from '../interface/IMaintenance';


export const registerMaintenanceService = async ({ repair, value }: createMaintenance ) => {
  // await Promise.all([
     
  // ]);

  try {
    await prisma.maintenance.create({
      data: {
        repair,
        value,
      }
    })
  } catch (error) {    
    console.log(error);
    throw new HttpException(httpStatus.BAD_REQUEST, 'Serviço não cadastrado')
  }

  return { success: true }
}
      