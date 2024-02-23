import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { deleteMaintenanceService } from '../../services/delete/deleteMaintenanceService';

export const deleteMaintenanceController = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const maintenanceId = req.params.id;

  const { success } = await deleteMaintenanceService(maintenanceId);

  res.status(httpStatus.OK).json({ message: "Serviço excluído!", success})
  
}

