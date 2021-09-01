import { Validation } from '../../../presentation'
import { ValidationComposite, EmailValidation, RequiredFieldValidation } from '../../../validations/validators'
import { EmailValidatorAdpter } from '../../../infra/validators/email-validator-adapter'
export const makeLinkerValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['discordId', 'email']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new EmailValidation('email', new EmailValidatorAdpter()))
  return new ValidationComposite(validations)
}
