type AddUserLogin = {
  id: string,
  email: string,
  code: string,
}

export interface AddLoginRepository {
  addLogin: (Userdata: AddLoginRepository.Params) => Promise<AddLoginRepository.Result>
}

export namespace AddLoginRepository {

  export type Params = AddUserLogin
  export type Result = boolean
}
