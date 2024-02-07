export const determineUserRole = (email: string): string => {
  if (email.endsWith("@empresa.com")) {
    return "manager";
  } else if (email.endsWith("@oficina.com")) {
    return "mechanic";
  }

  return "customer";
};