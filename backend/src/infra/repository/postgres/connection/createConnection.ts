import { createConnection, getConnectionManager } from 'typeorm'

export const initConnectionOnDb = async (): Promise<any> => {
  try {
    const connection = await createConnection('default')
    console.log(process.env.PD)
    await connection.connect()
  } catch (err) {
    if (err.code === 'CannotConnectAlreadyConnectedError') {
      const a = getConnectionManager().get('default')
      return a
    }
  }
}
