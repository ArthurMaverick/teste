import { atom } from "recoil";

export const tokens = atom({
  key: 'tokens',
  default: ''
})

console.log(tokens)