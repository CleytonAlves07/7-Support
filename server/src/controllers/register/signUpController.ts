import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { signUpService } from '../../services/register/signUpService';



export const signUpController = async (req: Request, res: Response, _next: NextFunction) => {
  const {email, password, name, cpf} = req.body;
  
  const { success } = await signUpService({ email, password, name, cpf })

  res.status(httpStatus.CREATED).json({ message: "Usuário criado com sucesso!", success});
}