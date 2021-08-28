require('dotenv').config()
export const secretsValues = {
  PORT: process.env.DEV_SERVER_PORT || 8000
}
