import { Linker } from '../../../../../domain/entities/linker'

export interface IdataEmaillinker {
  addLinkerEMail (args: IdataEmaillinker.Params): IdataEmaillinker.Result
}

export namespace IdataEmaillinker {
  export type Params = Omit<Linker, 'id' | 'discordUserInfo'>
  export type Result = Promise<boolean>
}
