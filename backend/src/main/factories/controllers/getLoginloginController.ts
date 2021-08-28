import { LoginFactory } from '../services'
import { makeloginValidation } from '../validations'
import { Controller } from '../../../presentation'
import { CreateLoginController } from '../../../presentation/controller'

export const makeAddLoginInfoController = (): Controller => {
  return new CreateLoginController(makeloginValidation(), LoginFactory())
}
