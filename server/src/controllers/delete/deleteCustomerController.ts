import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { deleteProductService } from '../../services/delete/deleteProductService';
import { deleteCustomerService } from '../../services/delete/deleteCustomerService';

export const deleteCustomerController = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const customerId = req.params.id;

  const { success } = await deleteCustomerService(customerId);

  res.status(httpStatus.OK).json({ message: "Cliente excluído!", success})
  
}

