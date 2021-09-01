import { UserSubscribe } from '../../../../../domain/entities/subscribe'

export interface ISelectSubscriberDataService {
  email (args: ISelectSubscriberDataService.Params): ISelectSubscriberDataService.Result
}

export namespace ISelectSubscriberDataService {
  export type Params = Pick<UserSubscribe, 'email'>
  export type Result = Promise<boolean>
}
