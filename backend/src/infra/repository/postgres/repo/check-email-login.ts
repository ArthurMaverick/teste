import { getRepository } from 'typeorm'
import { IEmailExists } from '../../../../data/rules/db/account/check-account-by-email-repository'
import { Login } from '../models/login'

export class EmailExists implements IEmailExists {
    private readonly pgLoginRepo = getRepository(Login)

    async checkByEmail (email: string): Promise<boolean> {
      const exists = await this.pgLoginRepo.findOne(email)
      if (exists !== undefined) {
        console.log(exists)
        return Boolean(exists)
      }
      return Boolean(exists)
    }
}
