import { Controller } from '../../presentation/rules'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      ...(req.query || {})
    }
    // console.log(request)
    const { body, statuscode } = await controller.handle(request)

    if (Number(statuscode) >= 200 && Number(statuscode) <= 299) {
      res.status(Number(statuscode)).json(body)
    } else {
      res.status(Number(statuscode)).json({ error: body.message })
    }
  }
}
