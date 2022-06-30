import { MiddlewareHandlerContext } from '$fresh/server.ts';

interface State {
  data: string;
}

export async function handler(
  _req: Request,
  ctx: MiddlewareHandlerContext<State>
) {
  ctx.state.data = 'cool kidz';
  const res = await ctx.next();
  res.headers.set('server', 'fresh server');
  return res;
}
