require('dotenv').config()
export const secretsValues = {
  PORT: process.env.DEV_SERVER_PORT || 8000
}

export const JWTsecret = {
  SECRET: process.env.SECRET
}

export const uri = {
  link: 'https://discord.com/api/oauth2/authorize?client_id=881056837099716668&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fv1%2Fany&response_type=code&scope=identify'
}

export const prod = true
