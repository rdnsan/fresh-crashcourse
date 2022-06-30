import {
  assert,
  assertEquals,
  assertStringIncludes,
} from 'https://deno.land/std@0.145.0/testing/asserts.ts';
import { ServerContext } from '$fresh/server.ts';

import manifest from '../fresh.gen.ts';

const serverCtx = await ServerContext.fromManifest(manifest, {});
const handler = serverCtx.handler();
const handleRequest = (req: Request) =>
  handler(req, {
    localAddr: {
      transport: 'tcp',
      hostname: '127.0.0.1',
      port: 80,
    },
    remoteAddr: {
      transport: 'tcp',
      hostname: '127.0.0.1',
      port: 80,
    },
  });

Deno.test({
  name: 'response with html',
  async fn() {
    const res = await handleRequest(new Request('https://deno.land/'));
    assert(res.headers.get('Content-Type')?.includes('text/html'));
    const text = await res.text();
    assertStringIncludes(
      text,
      '<title>Deno - A modern runtime for JavaScript and TypeScript</title>'
    );
  },
});
