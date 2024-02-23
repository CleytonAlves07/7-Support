import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { putUpdateMaintenanceService } from '../../services/update/putUpdateMaintenanceService';

export const putUpdateMaintenanceController = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const maintenanceId = req.params.id;

  const { success, updateMaintenance } = await putUpdateMaintenanceService(maintenanceId, req.body);

  res.status(httpStatus.OK).json({ message: "Serviço atualizado com sucesso!",  updateMaintenance, success})
  
}