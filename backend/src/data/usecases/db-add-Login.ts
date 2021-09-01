import { Login, UserLogin } from '../../domain/usecases'
import { DiscordClientInfo } from '../rules'
import { AddId } from '../rules/db'

export class DbAddLogin implements UserLogin {
  constructor (
      private readonly addId: AddId,
      private readonly discordID: DiscordClientInfo
  ) {}

  async userLogin (userwithouID: Login.Params): Promise<Login.Result> {
    const uuid = this.addId.uuid()
    const { access_token, code, discordId, token_type } = await this.discordID.getClientID(userwithouID.code)
    const userWithId = { id: uuid, access_token, code, discordId, token_type }
    return userWithId
  }
}
