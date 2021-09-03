require('dotenv').config()

export const crendentials = {
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  grant_type: process.env.CLIENT_GRANT_TYPE,
  redirect_uri: `${process.env.IP}${process.env.REDIRECTED_ENDPOINT}`,
  scope: process.env.CLIENT_SCOPE
}
