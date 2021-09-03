import { Router } from 'express'

export default (router: Router) => {
  router.get('/redirect', async (req, res) => {
    res.redirect('https://discord.com/api/oauth2/authorize?client_id=881056837099716668&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fv1%2Fany&response_type=code&scope=identify')
  })
}
