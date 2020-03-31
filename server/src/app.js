const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const app = new Koa();
const port = 3000;
const router = new Router({
  prefix: '/api'
});

app.use(async ctx => {
  ctx.body = ctx.request.body;
})

router.get('/', (ctx, next) => {
  ctx.body = 'HELLO KOa ~!~!';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, console.log(`成功启动端口${port}`));
