/** @jsx h */
/** @jsxFrag Fragment */
import { h } from 'preact';
import { AppProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import { tw } from 'twind';

export default function App({ Component }: AppProps) {
  return (
    <div id='__rdnsan'>
      <Head>
        <meta name='description' content='Fresh web framework crash course' />
      </Head>
      <Component />
    </div>
  );
}
