import { getRepository } from 'typeorm'
import { IEmailExists } from '../../../../data/rules/db/account/check-account-by-email-repository'
import { Login } from '../models/login'

export class EmailExists implements IEmailExists {
    private readonly pgLoginRepo = getRepository(Login)

    async checkByEmail (email: string): Promise<boolean> {
      console.log(email)
      const exists = await this.pgLoginRepo.findOne({ where: { email } })
      console.log('check', exists)
      if (exists) {
        return false
      }
      return true
    }
}
