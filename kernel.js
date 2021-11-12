'use strict'

/** @type {import('@adonisjs/framework/src/Server')} */
const Server = use('Server')

const globalMiddleware = [
  'Adonis/Middleware/BodyParser',
  'Adonis/Middleware/Session',
  'Adonis/Middleware/Shield',
  'Adonis/Middleware/AuthInit'
]

const namedMiddleware = {
  auth: 'Adonis/Middleware/Auth'
}

const serverMiddleware = [
  'Adonis/Middleware/Static',
  'Adonis/Middleware/Cors'
]

Server
  .registerGlobal(globalMiddleware)
  .registerNamed(namedMiddleware)
  .use(serverMiddleware)
