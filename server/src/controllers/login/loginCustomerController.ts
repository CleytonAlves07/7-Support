import httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import { SignInUser, loginCustomerService } from '../../services/login/loginCustomerService';


export const loginCustomerController = async (req: Request, res: Response, _next: NextFunction) => {
  const { email, password }: SignInUser = req.body;
  
  const { success, customer} = await loginCustomerService({ email, password });
  res.status(httpStatus.OK).json({ message: 'Usuário validado com sucesso', success, customer });

}
