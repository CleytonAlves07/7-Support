import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient';
import HttpException from '../../middleware/errors/HttpException';
import { createMaintenance } from '../interface/IMaintenance';
import { repairEmpty } from '../validations/register/maintenance/repairEmpty';
import { repairMaxCharacters } from '../validations/register/maintenance/repairMaxCharacters';


export const registerMaintenanceService = async ({ repair, amount }: createMaintenance ) => {
  await Promise.all([
    repairEmpty(repair),
    repairMaxCharacters(repair),
  ]);

  try {
    await prisma.maintenance.create({
      data: {
        repair,
        amount,
      }
    })
  } catch (error) {    
    console.log(error);
    throw new HttpException(httpStatus.BAD_REQUEST, 'Serviço não cadastrado')
  }

  return { success: true }
}
      