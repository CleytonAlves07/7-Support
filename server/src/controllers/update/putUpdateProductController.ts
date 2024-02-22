import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { putUpdateProductService } from '../../services/update/putUpdateProductService';

export const putUpdateProductController = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const productId = req.params.id;

  const { success, updateProduct } = await putUpdateProductService(productId, req.body);

  res.status(httpStatus.OK).json({ message: "Produto atualizado com sucesso!", updateProduct, success})
  
}