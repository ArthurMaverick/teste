import { UserLogin } from '../../../domain/usecases'
import { DbAddLogin } from '../../../data/usecases/db-add-Login'
import { AddIdOnRepository } from '../../../infra/criptography/add-id'
import { InsertLoginRepository } from '../../../infra/repository/postgres/repo/insertLogin'
import { Client } from '../../../infra/discord'

export const LoginFactory = (): UserLogin => {
  const addUuid = new AddIdOnRepository()
  const discordClient = new Client()
  const insertSub = new InsertLoginRepository()

  return new DbAddLogin(addUuid, discordClient, insertSub)
}
