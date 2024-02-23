import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { findAllMaintenanceService } from '../../services/find/findAllMaintenanceService';


export const findAllMaintenanceController = async(_req: Request, res: Response, _next: NextFunction) => {
  const maintenance = await findAllMaintenanceService();

  res.status(httpStatus.OK).json(maintenance)
}