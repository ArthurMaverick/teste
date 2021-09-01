import { ISubscribe } from '../../../domain/usecases'
import { DbAddSubscriberServices } from '../../../data/usecases/db-add-subscriber'
import { AddIdOnRepository } from '../../../infra/criptography/add-id'
import { FindDbSubscriberEmailValidator } from '../../../infra/repository/postgres/repo/check-email-subscribe'
import { InsertSubscriberRepository } from '../../../infra/repository/postgres/repo/insertsSubscriber'

export const SubscriberFactory = (): ISubscribe => {
  const addUuid = new AddIdOnRepository()
  const findDbSubscriberEmailValidator = new FindDbSubscriberEmailValidator()
  const insertSubscriberRepository = new InsertSubscriberRepository()
  return new DbAddSubscriberServices(addUuid, findDbSubscriberEmailValidator, insertSubscriberRepository)
}
