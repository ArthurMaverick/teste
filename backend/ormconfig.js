const path = require('node:path')
const prodPath = path.join('dist', 'infra', 'repository', 'postgres')
const devPath = path.join('src', 'infra', 'repository', 'postgres')
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
    entities: [prodPath + '/models/*.js'],
    migrations: [prodPath + 'postgresMigrations/*.js'],
    cli: { migrationsDir: prodPath + 'postgresMigrations' }
  },
  {
    name: 'developmentDB',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'test',
    password: '123456',
    database: 'panicLobter',
    entities: [devPath + '/models/*.ts'],
    migrations: [devPath + 'postgresMigrations/*.ts'],
    cli: { migrationsDir: devPath + 'postgresMigrations' }
  }]
