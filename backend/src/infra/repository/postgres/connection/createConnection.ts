import { createConnection } from 'typeorm'

export const initConnectionOnDb = async (): Promise<void> => {
  const connection = await createConnection('default')
  await connection.synchronize()
}
