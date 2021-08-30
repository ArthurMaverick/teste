import { DiscordClientInfo } from '../../data/rules/discord/keys'
import { credentials } from './keys'
import fetch from 'node-fetch'

export class Client implements DiscordClientInfo {
  async getClientID (query: string): Promise<string> {
    const code = query.toString()
    const completeCredentials = { ...credentials, code }
    const oauthResult = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      body: new URLSearchParams(completeCredentials),
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
    const data = await oauthResult.json()
    const userResult = await fetch('https://discord.com/api/users/@me', {
      headers: {
        authorization: `${data.token_type} ${data.access_token}`
      }
    })
    const payload = await userResult.json()
    return payload.id
  }
}
