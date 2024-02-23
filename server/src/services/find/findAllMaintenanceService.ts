import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient'
import HttpException from '../../middleware/errors/HttpException';
import { findMaintenance } from '../interface/IMaintenance';



export const findAllMaintenanceService = async (): Promise<findMaintenance[]> => {
  const products = await prisma.maintenance.findMany({
    select: {
      id: true,
      repair: true,
      value: true,
    }
  });
  if (!products) throw new HttpException(httpStatus.BAD_REQUEST, 'Lista de serviços não encontrada!');

  return products;
}