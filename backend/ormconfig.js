const path = require('node:path')
const prodPath = path.join('src', 'infra', 'repository', 'postgres')
require('dotenv').config()

module.exports = [
  {
    name: 'default',
    // synchronize: true,
    type: process.env.PROD_TYPE,
    host: process.env.PROD_HOST,
    port: process.env.PROD_PORT,
    username: process.env.PROD_USERNAME,
    password: process.env.PROD_PASSWORD,
    database: process.env.PROD_DATABASE,
    entities: [prodPath + '/models/*.{js,ts}'],
    migrations: [prodPath + '/postgresMigrations/*.{js,ts}'],
    cli: { migrationsDir: prodPath + '/postgresMigrations' }
  }]
