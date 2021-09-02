import { Login, UserLogin } from '../../domain/usecases'
import { DiscordClientInfo } from '../rules/discord'
import { AddId } from '../rules/db'
import { Encrypter } from '../rules/cryptography'

export class DbAddLogin implements UserLogin {
  constructor (
      private readonly addId: AddId,
      private readonly discordID: DiscordClientInfo,
      private readonly encode: Encrypter
  ) {}

  async userLogin (userwithouID: Login.Params): Promise<Login.Result> {
    const uuid = this.addId.uuid()
    const { access_token, code, discordId, token_type } = await this.discordID.getClientID(userwithouID.code)
    const userWithId = { id: uuid, access_token, code, discordId, token_type }
    const encoded = await this.encode.encrypter(userWithId)
    return encoded
  }
}
