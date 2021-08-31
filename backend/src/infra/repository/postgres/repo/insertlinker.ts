import { Linker } from '../models/linker'
import { IdataEmaillinker } from '../../../../data/rules/db/account'
import { getRepository } from 'typeorm'

export class AddEmail implements IdataEmaillinker {
    private readonly addEmail = getRepository(Linker)
    async addLinkerEMail (args: IdataEmaillinker.Params): IdataEmaillinker.Result {
      const payload = await this.addEmail.save(args)
      return !!payload || false
    }
}
