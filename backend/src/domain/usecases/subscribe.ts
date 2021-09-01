import { UserSubscribe } from '../entities/subscribe'

export interface ISubscribe {
  createSub: (subscriberInfo: ISubscribe.Params) => Promise<ISubscribe.Result>
}

export namespace ISubscribe {
  export type Params = UserSubscribe
  export type Result = Promise<boolean>

}
