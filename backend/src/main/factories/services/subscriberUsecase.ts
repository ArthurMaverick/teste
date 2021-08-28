import { Subscribe } from '../../../domain/usecases'
import { DbAddSubscriber } from '../../../data/usecases/db-add-subscriber'
import { AddIdOnRepository } from '../../../infra/criptography/add-id'
import { EmailExists } from '../../../infra/repository/postgres/repo/check-email-subscribe'
import { InsertRepository } from '../../../infra/repository/postgres/repo/inserts'

export const SubscriberFactory = (): Subscribe => {
  const addUuid = new AddIdOnRepository()
  const insertSub = new InsertRepository()
  const checkEmail = new EmailExists()
  return new DbAddSubscriber(addUuid, checkEmail, insertSub)
}
