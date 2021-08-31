import { EmailLinker } from '../../domain/usecases/linker'
import { Validation, Controller, HttpResponse } from '../rules'
import { badRequest, forbidden, ok, serverError } from '../helpers/http-helper'
import { EmailInUseError } from '../errors'

export class CreateEmailController implements Controller {
  constructor (
    private readonly add: EmailLinker,
    private readonly validator: Validation
  ) {}

  async handle (args: EmailLinker.Params): Promise<HttpResponse> {
    try {
      const isValid = this.validator.validate(args)
      if (!isValid) return badRequest(isValid)

      const payload = await this.add.link(args)
      if (!payload) return forbidden(new EmailInUseError())

      ok(payload)
    } catch (err) {
      console.log(err)
      serverError(err.name)
    }
  }
}
