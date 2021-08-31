import { Linker } from '../../../../../domain/entities/linker'

export interface IdataEmaillinker {
  addLinkerEMail (args: IdataEmaillinker.Params): IdataEmaillinker.Result
}

export namespace IdataEmaillinker {
  export interface Params extends Omit<Linker, 'id' | 'login'> {}
  export type Result = Promise<boolean>
}
