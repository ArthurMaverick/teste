type AddUserSubscribe = {
  id: string
  name: string,
  email: string,
  birthData: string,
  state: string,
  city: string,
}

export interface AddSubscribeRepository {
  addSub: (Userdata: AddSubscribeRepository.Params) => Promise<AddSubscribeRepository.Result>
}

export namespace AddSubscribeRepository {

  export type Params = AddUserSubscribe
  export type Result = boolean
}
