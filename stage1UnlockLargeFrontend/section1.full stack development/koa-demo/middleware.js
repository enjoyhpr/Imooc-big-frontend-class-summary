const Koa = require('koa')
const app = new Koa()

const middleware1 =  async(ctx, next) => {
  console.log('this is a middleware1!');
  console.log(ctx.request.path);
  // next()
}
const middleware2 =  async(ctx, next) => {
  console.log('this is a middleware2!');
  console.log(ctx.request.path);
  next()
  console.log('this is a middleware2 ending!')
}
const middleware3 =  async(ctx, next) => {
  console.log('this is a middleware3!');
  console.log(ctx.request.path);
  next()
  console.log('this is a middleware3 ending!')
}

app.use(middleware3)
app.use(middleware2)
app.use(middleware1)

app.listen(3000)