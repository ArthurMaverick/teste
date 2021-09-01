
import { Router } from 'express'
import { adaptRouteHeaders } from '../adapters/express-router-adapter-header'
import { makeAddLoginInfoController } from '../factories/controllers/getLoginloginController'
export default (router: Router) => {
  router.get('/any?', adaptRouteHeaders(makeAddLoginInfoController()))
}
