/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { ErrorPageProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';

export default function Error500Page({ error }: ErrorPageProps) {
  return (
    <>
      <Head>
        <title>Server Error</title>
      </Head>
      <h1>500 Internal Server Error: {(error as Error).message}</h1>
    </>
  );
}
