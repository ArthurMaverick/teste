require('dotenv').config()
const path = require('node:path')
const prodPath = path.join('dist', 'infra', 'repository', 'postgres')
const devPath = path.join('src', 'infra', 'repository', 'postgres')

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
    entities: [prodPath + '/models/*.js'],
    migrations: [prodPath + '/postgresMigrations/*.js'],
    cli: { migrationsDir: devPath + '/postgresMigrations' }
  }]
