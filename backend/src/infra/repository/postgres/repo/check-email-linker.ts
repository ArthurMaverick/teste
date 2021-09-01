import { Subscriber } from '../models/subscriber'
import { ISelectDataService } from '../../../../data/rules/db/account/linker'
import { getRepository } from 'typeorm'

export class FindDbLinkerEmailValidator implements ISelectDataService {
    private readonly repo = getRepository(Subscriber)
    async email ({ email }: ISelectDataService.Params): ISelectDataService.Result {
      const exists = await this.repo.findOne({ where: { email: email } })
      console.log('SELECT', exists)

      return exists
        ? exists.id
        : false
    }
}
