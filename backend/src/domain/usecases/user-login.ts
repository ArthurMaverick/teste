export namespace Login {
  export type Params = { code: string }
  export type Result = string
}
export interface UserLogin {
  userLogin: (LoginInputData: Login.Params) => Promise<Login.Result>
}
