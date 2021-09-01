import { getRepository } from 'typeorm'
import { ISelectSubscriberDataService } from '../../../../data/rules/db/account/subscriber'
import { Subscriber } from '../models/subscriber'

export class FindDbSubscriberEmailValidator implements ISelectSubscriberDataService {
    private readonly pgSubscribeRepo = getRepository(Subscriber)

    async email ({ email }: ISelectSubscriberDataService.Params):ISelectSubscriberDataService.Result {
      console.log('checkdb', email)
      const exists = await this.pgSubscribeRepo.findOne({ where: { email: email } })
      return !!exists
    }
}
