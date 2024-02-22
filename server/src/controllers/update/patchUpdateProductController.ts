import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { patchUpdateProductService } from '../../services/update/patchUpdateProductService';

export const patchUpdateProductController = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const productId = req.params.id;

  const { success, updateProduct } = await patchUpdateProductService(productId, req.body);


  res.status(httpStatus.OK).json({ message: "Produto atualizado com sucesso!", updateProduct, success})
  
}