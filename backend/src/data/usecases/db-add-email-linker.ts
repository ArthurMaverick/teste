import { IUpdateDataService, ISelectDataService } from '../rules/db/account/linker'
import { ILinker } from '../../domain/usecases'

export class DbLinkerServices implements ILinker {
  constructor (
    private readonly select: ISelectDataService,
    private readonly update: IUpdateDataService) {}

  async checkEmailAndSetDiscordID (args: ILinker.Params): ILinker.Result {
    const trueOrFalse = await this.select.email(args)

    if (!trueOrFalse && typeof trueOrFalse === 'boolean') {
      return false
    }

    if (typeof trueOrFalse === 'string') {
      const payload = { ...args, id: trueOrFalse }
      await this.update.discordId(payload)
      return true
    }

    console.log('final state', trueOrFalse)
  }
}
