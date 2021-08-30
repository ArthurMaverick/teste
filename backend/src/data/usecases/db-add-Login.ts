import { Login, UserLogin } from '../../domain/usecases'
import { AddLoginRepository, DiscordClientInfo } from '../rules'
import {
  AddId,
  IEmailExists
} from '../rules/db'

export class DbAddLogin implements UserLogin {
  constructor (
      private readonly addId: AddId,
      private readonly checkSubEmail: IEmailExists,
      private readonly discordID: DiscordClientInfo,
      private readonly add: AddLoginRepository
  ) {}

  async userLogin (userwithouID: Login.Params): Promise<Login.Result> {
    const exists = await this.checkSubEmail.checkByEmail(userwithouID.email)

    if (!exists) {
      const uuid = this.addId.uuid()
      const { access_token, code, discordId, token_type } = await this.discordID.getClientID(userwithouID.code)
      const userWithId = { id: uuid, email: userwithouID.email, access_token, code, discordId, token_type }
      const dbResponse = this.add.addLogin(userWithId)
      return dbResponse
    }

    return true
  }
}
