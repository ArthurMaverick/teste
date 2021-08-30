import { AddSub, Subscribe } from '../../domain/usecases'
import { AddSubscribeRepository } from '../rules'
import {
  AddId,
  IEmailExists
} from '../rules/db'

export class DbAddSubscriber implements Subscribe {
  constructor (
      private readonly addId: AddId,
      private readonly checkEmail: IEmailExists,
      private readonly add: AddSubscribeRepository
  ) {}

  async createSub (subwithouID: AddSub.Params): Promise<AddSub.Result> {
    const exists = await this.checkEmail.checkByEmail(subwithouID.email)
    if (exists) {
      const uuid = this.addId.uuid()
      const subWithId = { ...subwithouID, id: uuid }
      const dbResponse = this.add.addSub(subWithId)
      return dbResponse
    }
    return exists
  }
}
