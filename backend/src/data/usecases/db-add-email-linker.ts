import { IdataEmaillinker } from '../rules/db/account'
import { EmailLinker } from '../../domain/usecases'
import { ICheckDbEmailValidator } from '../rules/db/validators/checkDbEmailVAlidator'

export class DbEmailLinker implements EmailLinker {
  constructor (
    private readonly linker: IdataEmaillinker,
    private readonly Email: ICheckDbEmailValidator) {}

  async link (args: EmailLinker.Params): EmailLinker.Result {
    console.log(args)
    const exists = await this.Email.checkEmailByLinker(args.email) //
    if (!exists) {
      return false
    }

    console.log('argsServices', args)
    const payload = await this.linker.addLinkerEMail(args)
    return payload
  }
}
