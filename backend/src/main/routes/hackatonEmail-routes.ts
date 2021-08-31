import { maleGetEmailLinker } from '../factories/controllers/getEmailController'
import { adaptRoute } from '../adapters/express-router-adapter'
import { Router } from 'express'

export default (router: Router) => {
  router.post('/emailreceiver', adaptRoute(maleGetEmailLinker()))
}
