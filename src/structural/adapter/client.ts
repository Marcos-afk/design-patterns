import { EmailValidatorAdapter } from './validation/email-validator-adapter';

export const validateEmail = (emailValidator: EmailValidatorAdapter, email: string) => {
  if (emailValidator.isEmail(email)) {
    console.log('Email válido');
  } else {
    console.log('Email inválido');
  }
};
