import { Login, UserLogin } from '../../domain/usecases'
import { AddLoginRepository } from '../rules'
import {
  AddId,
  IEmailExists
} from '../rules/db'

export class DbAddLogin implements UserLogin {
  constructor (
      private readonly addId: AddId,
      private readonly checkEmail: IEmailExists,
      private readonly add: AddLoginRepository
  ) {}

  async userLogin (userwithouID: Login.Params): Promise<Login.Result> {
    const exists = await this.checkEmail.checkByEmail(userwithouID.email)

    if (!exists) {
      const uuid = this.addId.uuid()
      const userWithId = { ...userwithouID, id: uuid }
      const dbResponse = this.add.addLogin(userWithId)
      return dbResponse
    }

    return exists && true
  }
}
