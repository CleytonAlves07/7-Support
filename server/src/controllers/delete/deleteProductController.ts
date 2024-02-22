import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { deleteProductService } from '../../services/delete/deleteProductService';

export const deleteProductController = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const productId = req.params.id;

  const { success } = await deleteProductService(productId);

  res.status(httpStatus.OK).json({ message: "Produto excluído!", success})
  
}

