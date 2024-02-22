import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { findAllProductsService } from '../../services/find/findAllProductsService';


export const findAllProductsController = async(_req: Request, res: Response, _next: NextFunction) => {
  const products = await findAllProductsService();

  res.status(httpStatus.OK).json(products)
}