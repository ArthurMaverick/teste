import { DiscordClientInfo } from '../../data/rules/discord/keys'
import { crendentials } from './keys'
import { DiscordValues } from '../../data/rules/discord/index'
import fetch from 'node-fetch'

export class Client implements DiscordClientInfo {
  async getClientID (code: string): Promise<DiscordValues> {
    const values = []
    const oauthResult = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      body: new URLSearchParams({ ...crendentials, code }),
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    })

    const data = await oauthResult.json()
    values.push({
      token_type: data.token_type,
      access_token: data.access_token
    })

    const userResult = await fetch('https://discord.com/api/users/@me', {
      headers: {
        authorization: `${data.token_type} ${data.access_token}`
      }
    })
    const payload = await userResult.json()
    console.log(payload)
    return {
      token_type: values[0].token_type,
      access_token: values[0].access_token,
      discordId: payload.id,
      code
    }
  }
}
