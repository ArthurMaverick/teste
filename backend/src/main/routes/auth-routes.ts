import { Router } from 'express'
import { uri } from '../config/env'

export default (router: Router) => {
  router.get('/redirect', async (req, res) => {
    res.redirect(uri.link)
  })
}
