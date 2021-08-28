import { UserLogin } from '../../../domain/usecases'
import { DbAddLogin } from '../../../data/usecases/db-add-Login'
import { AddIdOnRepository } from '../../../infra/criptography/add-id'
import { EmailExists } from '../../../infra/repository/postgres/repo/check-email-login'
import { InsertLoginRepository } from '../../../infra/repository/postgres/repo/insertLogin'

export const LoginFactory = (): UserLogin => {
  const addUuid = new AddIdOnRepository()
  const checkEmail = new EmailExists()
  const insertSub = new InsertLoginRepository()
  return new DbAddLogin(addUuid, checkEmail, insertSub)
}
