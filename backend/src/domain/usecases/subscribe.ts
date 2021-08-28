export namespace AddSub {

  export type Params = {
    email: string,
    name: string,
    birthData: string,
    state: string,
    city: string,
  }

  export type Result = {
    name: string,
    email: string,
  } | boolean

}
export interface Subscribe {
  createSub: (subscriberInfo: AddSub.Params) => Promise<AddSub.Result>
}
