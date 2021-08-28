export namespace Login {
  export type Params = {
    email: string,
    discordId: string,
  }

  export type Result = object | boolean

}

export interface UserLogin {
  userLogin: (LoginInputData: Login.Params) => Promise<Login.Result>
}
