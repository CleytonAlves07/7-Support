import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { putUpdateCustomerService } from '../../services/update/putUpdateCustomerService';

export const putUpdateCustomerController = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const customerId = req.params.id;

  const { success, updateCustomer } = await putUpdateCustomerService(customerId, req.body);

  res.status(httpStatus.OK).json({ message: "Cliente atualizado com sucesso!", updateCustomer, success})
  
}