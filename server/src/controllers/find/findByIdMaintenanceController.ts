import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { findByIdMaintenanceService } from '../../services/find/findByIdMaintenanceService';

export const findByIdMaintenanceController = async(req: Request, res: Response, _next: NextFunction) => {
  const maintenanceId = req.params.id;
  const maintenance = await findByIdMaintenanceService(maintenanceId);

  if (!maintenance) res.status(httpStatus.NOT_FOUND).json({ message: "Serviço não encontrado!"});

  res.status(httpStatus.OK).json(maintenance);

};
