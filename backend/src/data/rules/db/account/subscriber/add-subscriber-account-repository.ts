import { UserSubscribe } from '../../../../../domain/entities/subscribe'

export interface IAddSubscriberServices {
  addSubscriber: (Userdata: IAddSubscriberServices.Params) => Promise<IAddSubscriberServices.Result>
}

export namespace IAddSubscriberServices {
  type Identifier = { id: string }

  export interface Params extends UserSubscribe, Identifier {}
  export type Result = Promise<boolean>

}
