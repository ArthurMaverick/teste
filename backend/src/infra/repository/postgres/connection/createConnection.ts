import { createConnection } from 'typeorm'

export const initConnectionOnDb = async (): Promise<void> => {
  const connection = await createConnection('default')
  console.log(process.env.PD)
  await connection.synchronize()
}
