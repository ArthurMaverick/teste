import { Controller } from '../../presentation/rules'
import { Request, Response } from 'express'

export const adaptRouteHeaders = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      ...(req.query || {})
    }
    console.log('Main/adpater: ', request)
    const { body, statuscode } = await controller.handle(request)
    if (req.query.log === 'logout') {
      return res.redirect('http://localhost:3000/board?p=logout')
    }

    if (Number(statuscode) >= 200 && Number(statuscode) <= 299) {
      res.status(Number(statuscode))

      return res.redirect(`http://localhost:3000/board?p=${body}`)
    } else {
      res.status(Number(statuscode))
      return res.redirect('http://localhost:3000')
    }
  }
}
