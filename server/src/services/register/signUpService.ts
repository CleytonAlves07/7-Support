import { cpfValidate } from '../validations/cpf/cpfValidate';
import { existingCPFCustomer } from '../validations/cpf/existingCPFCustomer';
import { emailEmpty } from '../validations/email/emailEmpty';
import { emailFormat } from '../validations/email/emailFormat';
import { existingEmailCustomer } from '../validations/email/existingEmailCustomer';
import { nameEmpty } from '../validations/name/nameEmpty';
import { passwordFormat } from '../validations/password/passwordFormat';
import { determineUserRole } from './determineUserRole';
import { customerSignUp } from './customerSignUp';
import { managerSignUp } from './managerSignUp';
import { mechanicSignUp } from './mechanicSignUp';



export interface UserSignUp {
  name: string;
  email: string;     
  password: string;
  cpf: string;
}

export const signUpService = async ({ email, password, name, cpf }: UserSignUp) => {
  await Promise.all([
    nameEmpty(name),
    emailEmpty(email),
    emailFormat(email),
    existingEmailCustomer(email),
    cpfValidate(cpf),
    existingCPFCustomer(cpf),
    passwordFormat(password),
  ]);
  try {
    const role = determineUserRole(email);
    if (role === 'customer') { await customerSignUp( email, password, name, cpf, role )}
    if (role === 'manager') { await managerSignUp(email, password, name, cpf, role)}
    if (role === 'mechanic') { await mechanicSignUp(email, password, name, cpf, role)}
    
  return { success: true }
  } catch (error) {
    console.error('Erro ao criar o usuário:', error)
    throw error;
  }
}
