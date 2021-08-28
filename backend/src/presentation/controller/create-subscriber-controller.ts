import { Controller, HttpResponse, Validation } from '../rules'
import { badRequest, serverError, ok, forbidden } from '../helpers/http-helper'
import { EmailInUseError } from '../errors/email-in-use-error'
import { Subscribe, AddSub } from '../../domain/usecases'
export class CreateSubscriberController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly dbAddUser: Subscribe

  ) {}

  async handle (request: AddSub.Params): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }

      const dataOrNull = await this.dbAddUser.createSub(request)

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