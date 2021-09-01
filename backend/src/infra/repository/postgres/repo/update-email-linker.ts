import { IUpdateDataService } from '../../../../data/rules/db/account/linker'
import { Subscriber } from '../models/subscriber'
import { getRepository } from 'typeorm'

type UpdateSubscribeParams = IUpdateDataService.Params
type UpdateSubscribeResult = IUpdateDataService.Result
export class UpdateDbLinkerEmailValidator implements IUpdateDataService {
  private readonly set = getRepository(Subscriber)

  async discordId (args: UpdateSubscribeParams): UpdateSubscribeResult {
    console.log('setREPO', args)
    const insertRes = await this.set.update(args.id, { discordId: args.discordId })
    console.log(insertRes)
    return !!insertRes
  }
}
