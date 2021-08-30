import { getRepository } from 'typeorm'
import { IEmailExists } from '../../../../data/rules/db/account/check-account-by-email-repository'
import { Subscriber } from '../models/subscriber'

export class EmailExists implements IEmailExists {
    private readonly pgSubscribeRepo = getRepository(Subscriber)

    async checkByEmail (email: string): Promise<boolean> {
      const exists = await this.pgSubscribeRepo.findOne(email)
      if (exists.email !== undefined) {
        console.log(exists)
        return Boolean(exists)
      }
      return Boolean(exists)
    }
}
