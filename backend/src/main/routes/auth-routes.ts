
import { Router } from 'express'

export default (router: Router) => {
  router.get('/redirect', (req, res) => {
    res.send({ ok: 200 })
  })
}
