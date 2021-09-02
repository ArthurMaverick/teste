import { createConnection, getConnectionManager, getConnectionOptions } from 'typeorm'

export const initConnectionOnDb = async (): Promise<any> => {
  try {
    const connectionOptions = await getConnectionOptions('default')
    const connection = await createConnection(connectionOptions)
    if (!connection.isConnected) {
      await connection.connect()
    }
  } catch (err) {
    if (err) {
      const a = getConnectionManager().get('default')
      return a
    }
  }
}
