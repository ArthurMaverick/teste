export namespace Login {
  export type Params = {
    email: string,
    code: string,
  }

  export type Result = object | boolean

}

export interface UserLogin {
  userLogin: (LoginInputData: Login.Params) => Promise<Login.Result>
}
