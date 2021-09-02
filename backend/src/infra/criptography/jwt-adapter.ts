import { Encrypter, Decrypter } from '../../data/rules/cryptography'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor (
    private readonly secret: string,
    private readonly expiresTime: string
  ) {}

  async encrypter (plaintext: Encrypter.Params): Encrypter.Result {
    const options = { expiresIn: this.expiresTime }
    return jwt.sign(plaintext, this.secret, options)
  }

  async decrypter (ciphertext: string): Promise<String> {
    return jwt.verify(ciphertext, this.secret) as any
  }
}
