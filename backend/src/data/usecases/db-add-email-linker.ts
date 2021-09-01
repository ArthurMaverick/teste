import { IUpdateDataService, ISelectDataService } from '../rules/db/account/linker'
import { ILinker } from '../../domain/usecases'

export class DbLinkerServices implements ILinker {
  constructor (
    private readonly select: ISelectDataService,
    private readonly update: IUpdateDataService) {}

  async checkEmailAndSetDiscordID (args: ILinker.Params): ILinker.Result {
    const trueOrFalse = await this.select.email(args)

    return trueOrFalse
      ? await this.update.discordId(args)
      : trueOrFalse
  }
}
