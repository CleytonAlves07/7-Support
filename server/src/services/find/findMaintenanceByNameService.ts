import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient';
import HttpException from '../../middleware/errors/HttpException';
import { findMaintenance } from '../interface/IMaintenance';

export const findMaintenanceByNameService = async (maintenanceName: string): Promise<findMaintenance | findMaintenance[]> => {
  
  const maintenance = await prisma.maintenance.findMany({
  where: {
    repair: {
      contains: maintenanceName,
    },
  },
  select: {
    id: true,
    repair: true,
    value: true,
  },
});

  if (!maintenance || maintenance.length === 0) {
    throw new HttpException(httpStatus.NOT_FOUND, `Nenhum serviço com o nome " ${maintenanceName} " foi encontrado!`);
  }

  return maintenance;
};
