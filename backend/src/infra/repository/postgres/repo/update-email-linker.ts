import { IUpdateDataService } from '../../../../data/rules/db/account/linker'
import { Linker } from '../models/linker'
import { getRepository } from 'typeorm'

export class UpdateDbLinkerEmailValidator implements IUpdateDataService {
  private readonly email = getRepository(Linker)

  async discordId (email: IUpdateDataService.Params): IUpdateDataService.Result {
    const exists = await this.email.findOne({ where: { email } })
    return !!exists
  }
}
