require('reflect-metadata')
require('dotenv').config()
const { initConnectionOnDb } = require('./config/dbConnection')

async function connect () {
  await initConnectionOnDb()
}
connect()
  .then(async () => {
    const { secretsValues } = await import('./config/env')
    const { app } = await import('./config/app')
    app.listen(secretsValues.PORT, () => console.log(`server runnig in localhost:${secretsValues.PORT}`))
  })
