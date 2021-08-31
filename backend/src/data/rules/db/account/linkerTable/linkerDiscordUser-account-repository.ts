import { Linker } from '../../../../../domain/entities/linker'

export interface IdataEmaillinker {
  addLinkerEMail (args: IdataEmaillinker.Params): IdataEmaillinker.Result
}

export namespace IdataEmaillinker {
  export type Params = Linker
  export type Result = Promise<boolean>
}
