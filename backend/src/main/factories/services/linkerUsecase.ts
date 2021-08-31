import { DbEmailLinker } from '../../../data/usecases/db-add-email-linker'
import { AddEmail } from '../../../infra/repository/postgres/repo/insertlinker'
import { CheckDbLinkerEmailValidator } from '../../../infra/repository/postgres/repo/validations/check-email-linker'

export const makeLinkerUsecase = (): DbEmailLinker => {
  const addEmail = new AddEmail()
  const checkDbLinkerEmailValidator = new CheckDbLinkerEmailValidator()
  return new DbEmailLinker(addEmail, checkDbLinkerEmailValidator)
}
