import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { registerProductService } from '../../services/register/registerProductService';
import { createProduct } from '../../services/find/IProduct';



export const registerProductController = async (req: Request, res: Response, _next: NextFunction) => {
  const { product, description, value }: createProduct = req.body;
  
  const { success } = await registerProductService({ product, description, value })

  res.status(httpStatus.CREATED).json({ message: "Produto cadastrado com sucesso!", success});
}