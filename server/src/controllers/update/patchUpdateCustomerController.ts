import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { patchUpdateCustomerService } from '../../services/update/patchUpdateCustomerService';

export const patchUpdateCustomerController = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const customerId = req.params.id;

  const { success, updateCustomer } = await patchUpdateCustomerService(customerId, req.body);


  res.status(httpStatus.OK).json({ message: "Cliente atualizado com sucesso!", updateCustomer, success})
  

}