import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient'
import HttpException from '../../middleware/errors/HttpException';


export const deleteMaintenanceService = async (id: string) => {

  const existingProduct = await prisma.maintenance.findUnique({
    where: { id },
    });

  if(!existingProduct) throw new HttpException(httpStatus.NO_CONTENT, "Serviço não encontrado!")
  
  await prisma.maintenance.delete({
    where: { id },
  })
  return { success: true };
}