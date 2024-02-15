import httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import { SignInUser, loginService,  } from '../../services/login/loginService';


export const loginController = async (req: Request, res: Response, _next: NextFunction) => {
  const { email, password }: SignInUser = req.body;
  
  const { success, user} = await loginService({ email, password });
  res.status(httpStatus.OK).json({ message: 'Usuário validado com sucesso', success, user });

}
