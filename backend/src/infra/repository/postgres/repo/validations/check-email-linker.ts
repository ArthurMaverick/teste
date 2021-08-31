import { ICheckDbEmailValidator } from '../../../../../data/rules/db/validators/checkDbEmailVAlidator'
import { Linker } from '../../models/linker'
import { getRepository } from 'typeorm'

export class CheckDbLinkerEmailValidator implements ICheckDbEmailValidator {
  private readonly email = getRepository(Linker)

  async checkEmailByLinker (args: ICheckDbEmailValidator.Params): ICheckDbEmailValidator.Result {
    const payload = await this.email.findOne({ where: { args } })
    if (payload) {
      console.log('emailLinker', payload)
      return false
    }
    return true
  }
}
