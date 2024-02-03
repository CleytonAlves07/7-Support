import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { customerSignUpService } from '../../services/register/customerSignUpService';



export const customerSignUpController = async (req: Request, res: Response, _next: NextFunction) => {
  const {email, password, name, cpf} = req.body;
  
  const { success } = await customerSignUpService({ email, password, name, cpf })

  res.status(httpStatus.CREATED).json({ message: "Cliente criado com sucesso!", success});
}