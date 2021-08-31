// import { Linker } from '../../../../domain/entities/linker'

export interface ICheckDbEmailValidator {
   checkEmailByLinker(args:string): Promise<boolean>
}

// export namespace ICheckDbEmailValidator{
//   export type Params = Omit<Linker, 'id' | 'login'>
//   export type Result = Promise<boolean>
// }
