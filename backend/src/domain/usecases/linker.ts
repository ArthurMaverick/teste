import { Linker } from '../entities/linker'

export interface ILinker {
  checkEmailAndSetDiscordID: (args: ILinker.Params) => ILinker.Result
}
export namespace ILinker {
  export type Params = Linker
  export type Result = Promise<boolean>
}
