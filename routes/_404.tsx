/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { UnknownPageProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <h1>404 Not Found: {url.pathname}</h1>
    </>
  );
}
