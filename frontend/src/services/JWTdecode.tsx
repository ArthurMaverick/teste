import jwt_decode from 'jwt-decode'

type TokensProps = {
      id: string,
      access_token: string,
      code: string,
      discordId: string,
      token_type: string,
      iat: number,
      exp: number
    }
    
export const JWTDecoder = (args: string): TokensProps=> {
      
      return  jwt_decode(args)

 
}