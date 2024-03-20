import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { findMaintenanceByNameService } from '../../services/find/findMaintenanceByNameService';


export const findMaintenanceByNameController = async(req: Request, res: Response, _next: NextFunction) => {
  const maintenanceName = req.query.query as string;
  
  const searchMaintenanceByName = await findMaintenanceByNameService(maintenanceName);

  res.status(httpStatus.OK).json(searchMaintenanceByName)
}