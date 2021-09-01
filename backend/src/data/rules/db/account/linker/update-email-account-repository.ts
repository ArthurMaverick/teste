import { Linker } from '../../../../../domain/entities/linker'

export interface IUpdateDataService {
  discordId (args: IUpdateDataService.Params): IUpdateDataService.Result
}

export namespace IUpdateDataService {
  type Identify = {id: string}
  export type Params = Linker & Identify
  export type Result = Promise<boolean>

}
