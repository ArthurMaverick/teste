import { UserLogin } from '../../../domain/usecases'
import { DbAddLogin } from '../../../data/usecases/db-add-Login'
import { AddIdOnRepository } from '../../../infra/criptography/add-id'
import { Client } from '../../../infra/discord'
import { JwtAdapter } from '../../../infra/criptography'
require('dotenv').config()

export const LoginFactory = (): UserLogin => {
  const addUuid = new AddIdOnRepository()
  const discordClient = new Client()
  const jwtAdapter = new JwtAdapter(process.env.SECRET, '2 days')

  return new DbAddLogin(addUuid, discordClient, jwtAdapter)
}
