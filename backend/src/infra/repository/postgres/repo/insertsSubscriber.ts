import { Subscriber } from '../models/subscriber'
import { IAddSubscriberServices } from '../../../../data/rules/db/account/subscriber'
import { getRepository } from 'typeorm'

type InsertSubscribeParams = IAddSubscriberServices.Params
type InsertSubscribeResult = IAddSubscriberServices.Result
export class InsertSubscriberRepository implements IAddSubscriberServices {
  private readonly insertRepo = getRepository(Subscriber)
  async addSubscriber (clientParams: InsertSubscribeParams): Promise<InsertSubscribeResult> {
    const insertRes = await this.insertRepo.save(clientParams)
    console.log(insertRes)
    return Boolean(insertRes) || false // TODO remove false
  }
}
