/** @jsx h */
import { h } from 'preact';
import { Handlers } from '$fresh/server.ts';
import { tw } from '@twind';

export const handler: Handlers = {
  async GET(_req, ctx) {
    const res = await ctx.render();
    res.headers.set('X-Custom-Header', 'Hello-Fresh');
    return res;
  },
};

export default function AboutPage() {
  return (
    <main>
      <h1 class={tw`text-xl font-medium`}>About</h1>
      <p>This is the about page.</p>
    </main>
  );
}
