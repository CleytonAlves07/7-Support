import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient';
import HttpException from '../../middleware/errors/HttpException';
import { findMaintenance } from '../interface/IMaintenance';


export const findByIdMaintenanceService = async (id: string): Promise<findMaintenance | null> => {
  const customer = await prisma.maintenance.findUnique({
    where: { id },
    select: {
      id: true,
      repair: true,
      amount: true,
    }
  });

  if (!customer) throw new HttpException(httpStatus.NOT_FOUND, "Serviço não encontrado!");
  
  return customer;
  
};