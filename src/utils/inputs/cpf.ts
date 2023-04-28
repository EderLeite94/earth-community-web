export const validateCPF = (cpf: string) => {
  // https://www.geradorcpf.com/javascript-validar-cpf.htm
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let digit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (digit !== parseInt(cpf.charAt(9))) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  digit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (digit !== parseInt(cpf.charAt(10))) return false;

  return true;
};
