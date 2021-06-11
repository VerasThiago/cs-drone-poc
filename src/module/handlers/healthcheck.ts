import Koa from 'koa'

export async function healthHandler(ctx: Koa.ParameterizedContext) {
  ctx.body = `I'm good!`
  ctx.status = 200
}
