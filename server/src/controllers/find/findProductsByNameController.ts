import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { findProductsByNameService } from '../../services/find/findProductsByNameService';


export const findProductsByNameController = async(req: Request, res: Response, _next: NextFunction) => {
  const productName = req.query.query as string;
  
  const searchProductByName = await findProductsByNameService(productName);

  res.status(httpStatus.OK).json(searchProductByName)
}