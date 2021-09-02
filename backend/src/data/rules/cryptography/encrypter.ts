export interface Encrypter {
  encrypter: (plaintext: Encrypter.Params) => Encrypter.Result
}
export namespace Encrypter {
export type Params = string | object | Buffer

export type Result = Promise<string>
}
