
import { Router } from 'express'
import fetch from 'node-fetch'

export default (router: Router) => {
  router.get('/any', async (req, res) => {
    const code = req.query.code
    if (code) {
      const oauthResult = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        body: new URLSearchParams({
          client_id: '881056837099716668',
          client_secret: 'xOTDMB8Kvg9xmbvBLS9CuLgnl0nHhFzN',
          code: code.toString(),
          grant_type: 'authorization_code',
          redirect_uri: 'http://localhost:8000/v1/any',
          scope: 'identify'
        }),
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      })
      console.log('code::' + code)

      const data = await oauthResult.json()
      res.send(data)
    } else {
      res.send({ error: false })
    }
  })
}
