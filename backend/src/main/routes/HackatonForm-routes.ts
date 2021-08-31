import { Router } from 'express'
import { adaptRoute } from '../adapters/express-router-adapter'
import { makeAddSubscriberController } from '../factories/controllers/subscriberController'

export default (router: Router) => {
  router.post('/form', adaptRoute(makeAddSubscriberController()))
}
