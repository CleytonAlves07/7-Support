import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { findAllCustomerService } from '../../services/find/findAllCustomerService';


export const findAllCustomerController = async(_req: Request, res: Response, _next: NextFunction) => {
  const customers = await findAllCustomerService();

  res.status(httpStatus.OK).json(customers)
}