require('dotenv').config()
export const secretsValues = {
  PORT: process.env.DEV_SERVER_PORT || 8000
}

export const JWTsecret = {
  SECRET: process.env.SECRET
}

export const uri = {
  link: `https://discord.com/api/oauth2/authorize?client_id=
    ${process.env.ID}&redirect_uri=
    ${process.env.IP}
    ${process.env.REDIRECTED_ENDPOINT}&response_type=code&scope=
    ${process.env.CLIENT_SCOPE}`
}
