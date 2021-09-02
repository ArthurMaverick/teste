
import { Router } from 'express'

export default (router: Router) => {
  router.get('/redirect', async (req, res) => {
    res.redirect('https://discord.com/api/oauth2/authorize?client_id=881056837099716668&redirect_uri=http://localhost:8000/v1/any&response_type=code&scope=identify')
  })
}
