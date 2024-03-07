import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient'
import HttpException from '../../middleware/errors/HttpException';
import { findMaintenance } from '../interface/IMaintenance';


export const putUpdateMaintenanceService = async (id: string, data: findMaintenance) => {
  // await Promise.all([
  
  // ]);

  const updateMaintenance = await prisma.maintenance.update({
    where: { id },
    data,
    select: {
      repair: true,
      value: true,
    }
  });

  if(!updateMaintenance) throw new HttpException(httpStatus.NO_CONTENT, "Serviço não foi atualizado!")

  return { updateMaintenance, success: true };
}