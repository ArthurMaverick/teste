type AddUserSubscribe = {
  id: string,
  email: string,
  discordId: string,
}

export interface AddLoginRepository {
  addLogin: (Userdata: AddLoginRepository.Params) => Promise<AddLoginRepository.Result>
}

export namespace AddLoginRepository {

  export type Params = AddUserSubscribe
  export type Result = boolean
}
