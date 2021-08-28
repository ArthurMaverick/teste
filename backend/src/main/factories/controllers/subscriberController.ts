import { SubscriberFactory } from '../services'
import { makeSubValidation } from '../validations'
import { Controller } from '../../../presentation'
import { CreateSubscriberController } from '../../../presentation/controller'

export const makeAddSubscriberController = (): Controller => {
  return new CreateSubscriberController(makeSubValidation(), SubscriberFactory())
}
