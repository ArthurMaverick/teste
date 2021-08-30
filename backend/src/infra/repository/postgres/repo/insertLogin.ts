import { Login } from '../models/login'
import { AddLoginRepository } from '../../../../data/rules'
import { getRepository } from 'typeorm'

type InsertSubscribeParam = AddLoginRepository.Params
type InsertSubscribeResult = AddLoginRepository.Result

export class InsertLoginRepository implements AddLoginRepository {
  private readonly insertLoginRepo = getRepository(Login)
  async addLogin (LoginData: InsertSubscribeParam): Promise<InsertSubscribeResult> {
    // console.log('addlogi', LoginData)
    const insertRes = this.insertLoginRepo.save(LoginData)
    console.log('response database', insertRes)
    return Boolean(insertRes) || false
  }
}
