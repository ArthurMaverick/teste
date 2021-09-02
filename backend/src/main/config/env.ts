require('dotenv').config()
export const secretsValues = {
  PORT: process.env.DEV_SERVER_PORT || 8000
}

export const JWTsecret = {
  SECRET: process.env.SECRET
}
