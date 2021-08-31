import { Subscriber } from '../models/subscriber'
import { AddSubscribeRepository } from '../../../../data/rules'
import { getRepository } from 'typeorm'

type InsertSubscribeParams = AddSubscribeRepository.Params
type InsertSubscribeResult = AddSubscribeRepository.Result
export class InsertRepository implements AddSubscribeRepository {
  private readonly insertRepo = getRepository(Subscriber)
  async addSub (clientParams: InsertSubscribeParams): Promise<InsertSubscribeResult> {
    const insertRes = await this.insertRepo.save(clientParams)
    console.log(insertRes)
    return Boolean(insertRes) || false
  }
}
