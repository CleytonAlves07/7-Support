import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient';
import HttpException from '../../middleware/errors/HttpException';
import { createMaintenance } from '../interface/IMaintenance';
import { repairEmpty } from '../validations/register/maintenance/repairEmpty';
import { repairMaxCharacters } from '../validations/register/maintenance/repairMaxCharacters';
import { pascalRegisterRepair } from '../validations/register/maintenance/pascalRegisterRepair';
import { amountFormat } from '../validations/register/maintenance/amountFormat';


export const registerMaintenanceService = async ({ repair, amount }: createMaintenance ) => {
  await Promise.all([
    repairEmpty(repair),
    repairMaxCharacters(repair),
    pascalRegisterRepair(repair),
    amountFormat(amount),
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
      