import { Controller } from '../../../presentation'
import { CreateEmailController } from '../../../presentation/controller/create-email-controller'
import { makeLinkerUsecase } from '../services'
import { makeLinkerValidation } from '../validations'

export const maleGetEmailLinker = (): Controller => {
  return new CreateEmailController(makeLinkerUsecase(), makeLinkerValidation())
}
