import dotenv from 'dotenv'
import path from 'path'
import http from 'http'

import bodyParser from 'koa-bodyparser'
import koa from 'koa'
import koaRouter from 'koa-router'

dotenv.config()

// Instantiate koa and koa-router
const app = new koa()
const router = koaRouter()

// Enable default middleware
require('./middleware/DefaultMiddleware')(app)

// Enable bodyparser and router
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

// Serve routes
require('./routes')(router)

const host = process.env.SERVER_HOST
const port = process.env.SERVER_PORT

app.listen(port, host, () => {
  console.log(`Available on http://${ host }:${ port }`)
})
