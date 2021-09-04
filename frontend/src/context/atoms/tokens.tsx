import { atom } from "recoil";
type TokensProps = {
  props: any,
  id: string,
  access_token: string,
  code: string,
  discordId: string,
  token_type: string,
  iat: number,
  exp: number
}

export const textState = atom({
  key: 'textState',
  default: [] as unknown as TokensProps
 })
