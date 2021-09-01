import { ISubscribe } from '../../domain/usecases'
import { IAddSubscriberServices, ISelectSubscriberDataService } from '../rules/db/account/subscriber'
import { AddId } from '../rules/db'

export class DbAddSubscriberServices implements ISubscribe {
  constructor (
      private readonly addId: AddId,
      private readonly find: ISelectSubscriberDataService,
      private readonly add: IAddSubscriberServices
  ) {}

  async createSub (subwithouID: ISubscribe.Params): Promise<ISubscribe.Result> {
    const exists = await this.find.email(subwithouID)
    console.log('check', exists)

    if (!exists) {
      const uuid = this.addId.uuid()
      const subWithId = { ...subwithouID, id: uuid }
      const dbResponse = this.add.addSubscriber(subWithId)
      return !!dbResponse
    }
    return false
  }
}
