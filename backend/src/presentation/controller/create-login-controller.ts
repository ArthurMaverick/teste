import { Controller, HttpResponse, Validation } from '../rules'
import { badRequest, serverError, ok, forbidden } from '../helpers/http-helper'
import { EmailInUseError } from '../errors/email-in-use-error'
import { UserLogin, Login } from '../../domain/usecases'
export class CreateLoginController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly dbAddUser: UserLogin

  ) {}

  async handle (request: Login.Params): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }

      const dataOrNull = await this.dbAddUser.userLogin(request)

      if (!dataOrNull) {
        return forbidden(new EmailInUseError())
      }

      return ok(dataOrNull)
    } catch (err) {
      console.log(err)
      return serverError(err)
    }
  }
}
