type AddUserLogin = {
  id: string
  discordId: string
  email?: string
  code: string,
  access_token: string,
  token_type: string
}

export interface AddLoginRepository {
  addLogin: (Userdata: AddLoginRepository.Params) => Promise<AddLoginRepository.Result>
}

export namespace AddLoginRepository {

  export type Params = AddUserLogin
  export type Result = boolean
}
