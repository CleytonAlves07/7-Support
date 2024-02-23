import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { patchUpdateMaintenanceService } from '../../services/update/patchUpdateMaintenanceService';

export const patchUpdateMaintenanceController = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const maintenanceId = req.params.id;

  const { success, updateMaintenance } = await patchUpdateMaintenanceService(maintenanceId, req.body);

  res.status(httpStatus.OK).json({ message: "Serviço atualizado com sucesso!",  updateMaintenance, success})
  
}