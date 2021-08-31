import { EmailValidatorAdpter } from '../../../infra/validators/email-validator-adapter'
import { Validation } from '../../../presentation'
import { ValidationComposite, EmailValidation, RequiredFieldValidation } from '../../../validations/validators'
export const makeLinkerValidation = () => {
  const validatons: Validation[] = []

  for (const fields of ['email']) {
    validatons.push(new RequiredFieldValidation(fields))
  }
  validatons.push(new EmailValidation('email', new EmailValidatorAdpter()))
  return new ValidationComposite(validatons)
}
