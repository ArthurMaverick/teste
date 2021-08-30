export type DiscordValues = {
  token_type:string
  access_token: string
  discordId: string,
  code: string
}

export type DiscordClientInfo = {
  getClientID (credentials: string): Promise<DiscordValues>
}
