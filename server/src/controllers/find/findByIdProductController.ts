import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { findByIdProductService } from '../../services/find/findByIdProductService';

export const findByIdProductController = async(req: Request, res: Response, _next: NextFunction) => {
  const customerId = req.params.id;
  const customer = await findByIdProductService(customerId);

  if (!customer) res.status(httpStatus.NOT_FOUND).json({ message: "Produto não encontrado!"});

  res.status(httpStatus.OK).json(customer);

};
