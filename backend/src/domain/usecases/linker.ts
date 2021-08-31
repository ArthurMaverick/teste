import { Linker } from '../entities/linker'

export type EmailLinker = {
  link (params: EmailLinker.Params): EmailLinker.Result
}

export namespace EmailLinker {
  export type Params = Omit<Linker, 'login' | 'id'>

  export type Result = Promise<boolean>
}
