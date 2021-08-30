import { Validation } from '../../../presentation/rules'
import { EmailValidation, RequiredFieldValidation, ValidationComposite } from '../../../validations/validators'
import { EmailValidatorAdpter } from '../../../infra/validators/email-validator-adapter'

export const makeloginValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['email', 'code']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new EmailValidation('email', new EmailValidatorAdpter()))
  return new ValidationComposite(validations)
}
