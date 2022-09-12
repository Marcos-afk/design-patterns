import isEmail from 'validator/lib/isEmail';
import { IEmailValidatorProtocol } from './email-validator-protocol';

export class EmailValidatorAdapter implements IEmailValidatorProtocol {
  isEmail(email: string): boolean {
    return isEmail(email);
  }
}
