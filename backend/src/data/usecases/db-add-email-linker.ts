import { IdataEmaillinker } from '../rules/db/account'
import { EmailLinker } from '../../domain/usecases'
import { ICheckDbEmailValidator } from '../rules/db/validators/checkDbEmailVAlidator'

export class DbEmailLinker implements EmailLinker {
  private readonly linker: IdataEmaillinker
  private readonly Email: ICheckDbEmailValidator
  async link (args: EmailLinker.Params): EmailLinker.Result {
    const exists = await this.Email.checkEmailByLinker(args)
    if (!exists) return false

    const payload = await this.linker.addLinkerEMail(args)
    return payload
  }
}
