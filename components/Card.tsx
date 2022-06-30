/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { tw } from '@twind';

export function Card(props: {
  login: string;
  name: string;
  avatar_url: string;
}) {
  return (
    <div class={tw`w-full mt-4`}>
      <div
        class={tw`flex flex-col justify-center items-center border rounded shadow-md w-[250px] h-[300px] m-auto`}
      >
        <img
          class={tw`rounded-full border-2`}
          src={props.avatar_url}
          alt='Avatar'
          width={120}
          height={120}
        />
        <h1 class={tw`text-xl font-medium font-sans`}>{props.name}</h1>
        <p>{props.login}</p>
      </div>
    </div>
  );
}
