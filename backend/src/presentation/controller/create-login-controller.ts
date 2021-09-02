import { Controller, HttpResponse, Validation } from '../rules'
import { badRequest, serverError, ok, unauthorized } from '../helpers/http-helper'
import { UserLogin } from '../../domain/usecases'
export class CreateLoginController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly dbAddUser: UserLogin

  ) {}

  async handle (request: any): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)

      if (error) {
        return badRequest(error)
      }

      const encodedJWT = await this.dbAddUser.userLogin(request)

      if (!encodedJWT) {
        return unauthorized()
      }

      return ok(encodedJWT)
    } catch (err) {
      console.log(err)
      return serverError(err)
    }
  }
}
