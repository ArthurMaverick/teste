import { Validation } from '../../../presentation/rules'
import { RequiredFieldValidation, ValidationComposite } from '../../../validations/validators'

export const makeloginValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['code']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
