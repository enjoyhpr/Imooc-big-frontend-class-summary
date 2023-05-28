const Koa = require('koa')
const Router = require('@koa/router')
const cors = require('@koa/cors')
const {koaBody} = require('koa-body')
const koaJson = require('koa-json')

const app = new Koa()
const router = new Router()

router.prefix('/api')

router.get('/', ctx => {
  console.log(ctx)
  console.log(ctx.request)
  ctx.body = 'Hello World!'
})

router.get('/api', ctx => {
  const params = ctx.request.query
  console.log(params);
  // name: 'peiro', age: 28
  console.log(params.name, params.age);
  console.log(ctx)
  console.log(ctx.request)
  ctx.body = {
    name: params.name,
    age: params.age
  }
})

router.get('/async', async(ctx) => {
  let result = await new Promise((resolve) => {
    setTimeout(() => resolve('2 seconds later!' ), 2000)
  })
  ctx.body = result
})

router.post('/post', async (ctx) => {
  let {body} = ctx.request
  console.log(body);
  console.log(ctx.request);
  ctx.body = {
    ...body
  }
})

app.use(koaBody())
app.use(cors())
app.use(koaJson({pretty: false, param: 'pretty'}))
// 1.request, method, response
// 2.api url => function , router?
// 3.ctx, async
// app.use(async ctx => {
//   console.log(ctx)
//   console.log(ctx.request)
//   ctx.body = 'Hello World!'
// })

app.use(router.routes())
app.use(router.allowedMethods()) //拦截器，拦截没有监听到的路径，就会返回 Not Found 或者 4xx或者5xx错误

app.listen(3000)