import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { createMaintenance } from '../../services/interface/IMaintenance';
import { registerMaintenanceService } from '../../services/register/registerMaintenanceService';



export const registerMaintenanceController = async (req: Request, res: Response, _next: NextFunction) => {
  const { repair, amount }: createMaintenance = req.body;
  
  const { success } = await registerMaintenanceService({ repair, amount })

  res.status(httpStatus.CREATED).json({ message: "Serviço cadastrado com sucesso!", success});
}