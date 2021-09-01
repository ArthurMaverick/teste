import { Linker } from '../../../../../domain/entities/linker'

export interface IUpdateDataService {
  discordId (args: IUpdateDataService.Params): IUpdateDataService.Result
}

export namespace IUpdateDataService {
  export type Params = Omit<Linker, 'email'>
  export type Result = Promise<boolean>
}
