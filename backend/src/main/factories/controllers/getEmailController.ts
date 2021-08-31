import { makeLinkerUsecase } from '../services'
import { makeLinkerValidation } from '../validations'
import { Controller } from '../../../presentation'
import { CreateEmailController } from '../../../presentation/controller'

export const makeGetEmailLinker = (): Controller => {
  return new CreateEmailController(makeLinkerValidation(), makeLinkerUsecase())
}
