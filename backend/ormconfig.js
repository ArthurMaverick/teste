const path = require('node:path')
const prodPath = path.join('src', 'infra', 'repository', 'postgres')
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
    entities: [prodPath + '/models/*.{ts,js}'],
    migrations: [prodPath + '/postgresMigrations/*.{ts,js}'],
    cli: { migrationsDir: prodPath + '/postgresMigrations' }
  }]
