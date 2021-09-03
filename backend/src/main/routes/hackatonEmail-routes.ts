import { Router } from 'express'
import { adaptRoute } from '../adapters/express-router-adapter'
import { makeGetEmailLinker } from '../factories/controllers/getEmailController'

export default (router: Router) => {
  router.post('/linker/discord', adaptRoute(makeGetEmailLinker()))
}
