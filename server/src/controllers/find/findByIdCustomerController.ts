import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { findByIdCustomerService } from '../../services/find/findByIdCustomerService';
import HttpException from '../../middleware/errors/HttpException';

export const findByIdCustomerController = async(req: Request, res: Response, _next: NextFunction) => {
  const customerId = req.params.id;
  const customer = await findByIdCustomerService(customerId);

  if (!customer) res.status(httpStatus.NOT_FOUND).json({ message: "Cliente não encontrado!"});

  res.status(httpStatus.OK).json(customer);

};
