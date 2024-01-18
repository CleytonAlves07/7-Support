import { Request, Response, NextFunction } from 'express';
import HttpException from './errors/HttpException';


export const errorHandler = async(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
): Promise<Response<any, Record<string, any>>> => {
  const status = err instanceof HttpException ? err.status : err.status || 500;
  return res.status(status).json({ message: err.message });
};
