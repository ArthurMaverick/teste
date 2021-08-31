import { ICheckDbEmailValidator } from '../../../../../data/rules/db/validators/checkDbEmailVAlidator'
import { Linker } from '../../models/linker'
import { getRepository } from 'typeorm'

export class CheckDbLinkerEmailValidator implements ICheckDbEmailValidator {
  private readonly email = getRepository(Linker)

  async checkEmailByLinker (email: string): Promise<boolean> {
    console.log('emailLinker', email)
    const payload = await this.email.findOne({ where: { email } })
    if (payload) {
      return false
    }
    return true
  }
}
