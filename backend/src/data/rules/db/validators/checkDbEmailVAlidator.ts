import { Linker } from '../../../../domain/entities/linker'

export interface ICheckDbEmailValidator {
   checkEmailByLinker(args: ICheckDbEmailValidator.Params): ICheckDbEmailValidator.Result
}

export namespace ICheckDbEmailValidator{
  export interface Params extends Omit<Linker, 'id' | 'login'> {}
  export type Result = Promise<boolean>
}
