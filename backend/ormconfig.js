const path = require('node:path')
const relativePath = path.join(__dirname, '**', 'infra', 'repository', 'postgres')
require('dotenv').config()

module.exports = [
  {
    name: 'default',
    type: process.env.PROD_TYPE,
    host: process.env.PROD_HOST,
    port: process.env.PROD_PORT,
    username: process.env.PROD_USERNAME,
    password: process.env.PROD_PASSWORD,
    database: process.env.PROD_DATABASE,
    entities: [relativePath + 'models/*.{ts, js}']
    // migrations: [relativePath]
  },
  {
    name: 'DevelopmentDB',
    type: process.env.DEV_TYPE,
    host: process.env.DEV_HOST,
    port: process.env.DEV_PORT,
    username: process.env.DEV_USERNAME,
    password: process.env.DEV_PASSWORD,
    database: process.env.DEV_DATABASE,
    entities: [relativePath + '.login.{ts, js}', relativePath + '.subscriber.{ts, js}']
  }]
