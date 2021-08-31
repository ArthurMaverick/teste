import { EmailLinker } from '../../domain/usecases/linker'
import { Validation, Controller, HttpResponse } from '../rules'
import { badRequest, forbidden, ok, serverError } from '../helpers/http-helper'
import { EmailInUseError } from '../errors'

export class CreateEmailController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly add: EmailLinker
  ) {}

  async handle (request: EmailLinker.Params): Promise<HttpResponse> {
    console.log('argsController', request)
    try {
      const isValid = this.validation.validate(request)
      console.log('isValid', isValid)

      if (isValid) {
        return badRequest(isValid)
      }

      const payload = await this.add.link(request)
      if (!payload) {
        console.log('argsController1')
        return forbidden(new EmailInUseError())
      }

      ok(payload)
    } catch (err) {
      console.log(err)
      serverError(err.name)
    }
  }
}
