export interface IEmailExists {
  checkByEmail: (email: string) => Promise<IEmailExists.Result>
}

export namespace IEmailExists {
  export type Result = boolean;
}
