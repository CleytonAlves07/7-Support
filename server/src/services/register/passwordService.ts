import bcryptjs from 'bcryptjs';


export const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await bcryptjs.hash(password, 10);
  return hashedPassword;
}