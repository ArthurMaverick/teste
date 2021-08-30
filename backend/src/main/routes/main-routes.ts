
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-router-adapter'
import { makeAddLoginInfoController } from '../factories/controllers/getLoginloginController'
export default (router: Router) => {
  router.get('/any?', adaptRoute(makeAddLoginInfoController()))
}
