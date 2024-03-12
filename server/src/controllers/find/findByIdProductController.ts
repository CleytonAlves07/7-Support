import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { findByIdProductService } from '../../services/find/findByIdProductService';

export const findByIdProductController = async(req: Request, res: Response, _next: NextFunction) => {
  const productId = req.params.id;
  const product = await findByIdProductService(productId);

  if (!product) res.status(httpStatus.NOT_FOUND).json({ message: "Produto não encontrado!"});

  res.status(httpStatus.OK).json(product);

};
