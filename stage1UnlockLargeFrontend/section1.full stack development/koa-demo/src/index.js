
import Koa from 'koa'
import cors from '@koa/cors'
import {koaBody} from 'koa-body'
import koaJson from 'koa-json'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import routers from './routes/routes'

// const path = require('path') 
// const Koa = require('koa')
// const cors = require('@koa/cors')
// const {koaBody} = require('koa-body')
// const koaJson = require('koa-json')
// const routers = require('./routes/routes')
// const helmet = require('koa-helmet')
// const statics = require('koa-static')

const app = new Koa()

app.use(koaBody())
app.use(cors())
app.use(koaJson({pretty: false, param: 'pretty'}))

app.use(helmet())
app.use(statics(path.join(__dirname, '../public')))

app.use(routers())

app.listen(4000)