import { UpdateDbLinkerEmailValidator, FindDbLinkerEmailValidator } from '../../../infra/repository/postgres/repo/'
import { DbLinkerServices } from '../../../data/usecases/db-add-email-linker'

export const makeLinkerUsecase = (): DbLinkerServices => {
  const findDbLinkerEmailValidator = new FindDbLinkerEmailValidator()
  const updateDbLinkerEmailValidator = new UpdateDbLinkerEmailValidator()
  return new DbLinkerServices(findDbLinkerEmailValidator, updateDbLinkerEmailValidator)
}
