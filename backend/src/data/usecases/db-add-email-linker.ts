import { IdataEmaillinker } from '../rules/db/account'
import { EmailLinker } from '../../domain/usecases'
export class DbEmailLinker implements EmailLinker {
  private readonly Linker: IdataEmaillinker

  async link (args: EmailLinker.Params): EmailLinker.Result {
    const payload = await this.Linker.addLinkerEMail(args)
    return payload
  }
}
