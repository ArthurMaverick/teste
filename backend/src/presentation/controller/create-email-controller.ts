import { ILinker } from '../../domain/usecases/linker'
import { Validation, Controller, HttpResponse } from '../rules'
import { badRequest, forbidden, ok, serverError } from '../helpers/http-helper'
import { EmailInUseError } from '../errors'

export class CreateEmailController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly add: ILinker
  ) {}

  async handle (request: ILinker.Params): Promise<HttpResponse> {
    try {
      const isValid = this.validation.validate(request)

      if (isValid) {
        return badRequest(isValid)
      }

      const payload = await this.add.checkEmailAndSetDiscordID(request)
      if (!payload) {
        return forbidden(new EmailInUseError())
      }

      return ok(payload)
    } catch (err: any) {
      console.log(err)
      serverError(err)
    }
  }
}
