import { Linker } from '../../../../../domain/entities/linker'

export interface ISelectDataService {
  email (args: ISelectDataService.Params): ISelectDataService.Result
}

export namespace ISelectDataService {
  export type Params = Omit<Linker, 'discordId'>
  export type Result = Promise<boolean | string >
}
