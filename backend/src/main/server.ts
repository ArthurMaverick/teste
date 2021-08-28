import 'reflect-metadata'
import { initConnectionOnDb } from '../infra/repository/postgres/connection/createConnection'

initConnectionOnDb().then(async () => {
  const { secretsValues } = await import('./config/env')
  const { app } = await import('./config/app')
  app.listen(secretsValues.PORT, () => console.log(`server runnig in localhost:${secretsValues.PORT}`))
})
