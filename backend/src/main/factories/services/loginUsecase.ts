import { UserLogin } from '../../../domain/usecases'
import { DbAddLogin } from '../../../data/usecases/db-add-Login'
import { AddIdOnRepository } from '../../../infra/criptography/add-id'
import { Client } from '../../../infra/discord'

export const LoginFactory = (): UserLogin => {
  const addUuid = new AddIdOnRepository()
  const discordClient = new Client()

  return new DbAddLogin(addUuid, discordClient)
}
