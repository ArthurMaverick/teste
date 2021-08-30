import { getRepository } from 'typeorm'
import { IEmailExists } from '../../../../data/rules/db/account/check-account-by-email-repository'
import { Subscriber } from '../models/subscriber'

export class EmailExists implements IEmailExists {
    private readonly pgSubscribeRepo = getRepository(Subscriber)

    async checkByEmail (email: string): Promise<boolean> {
      const exists = await this.pgSubscribeRepo.findOne({ where: { email } })
      console.log('sub check', email, 'return', exists.email)
      if (exists) {
        return false
      }
      return true
    }
}
