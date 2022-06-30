/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { Handlers, PageProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import { Card } from '@components';

interface User {
  login: string;
  name: string;
  avatar_url: string;
}

export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    const { username } = ctx.params;
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (res.status === 404) return ctx.render(null);
    const user: User = await res.json();
    return ctx.render(user);
  },
};

export default function Page({ data }: PageProps<User | null>) {
  if (!data) return <h1>User not found</h1>;
  return (
    <>
      <Head>
        <title>{data.login} | GitHub API User</title>
      </Head>
      <Card login={data.login} name={data.name} avatar_url={data.avatar_url} />
    </>
  );
}
