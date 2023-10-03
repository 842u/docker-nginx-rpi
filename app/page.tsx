import { DockerIcon } from '@/components/icons/DockerIcon';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { NextIcon } from '@/components/icons/NextIcon';
import { NginxIcon } from '@/components/icons/NginxIcon';
import { RaspberryPiIcon } from '@/components/icons/RaspberryPiIcon';
import { SshIcon } from '@/components/icons/SshIcon';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly">
      <h1 className="text-4xl md:text-6xl">
        Hello
        <span className="inline-block origin-bottom-right animate-wiggle">
          👋
        </span>
      </h1>
      <p className="flex flex-col items-center text-xl md:flex-row md:text-2xl">
        I was built with
        <NextIcon className="aspect-square h-14 animate-roll fill-[antiquewhite] md:mx-10 md:h-24" />
        .
      </p>
      <p className="flex flex-col items-center text-xl md:flex-row md:text-2xl">
        Packed and shipped as
        <DockerIcon className="aspect-square h-14 animate-wave md:mx-2 md:h-24" />
        image.
      </p>
      <p className="flex flex-col items-center text-xl md:flex-row md:text-2xl">
        Deployed on
        <RaspberryPiIcon className="aspect-square h-14 animate-heartbeat md:mx-2 md:h-24" />
        private server via
        <SshIcon className="aspect-square h-14 animate-pulse fill-[antiquewhite] md:mx-2 md:h-24" />
        .
      </p>
      <p className="flex flex-col items-center text-xl md:flex-row md:text-2xl">
        Forwarded to you using
        <NginxIcon className="aspect-square h-14 animate-ping md:mx-14 md:h-24" />
        reverse proxy.
      </p>
      <p className="flex flex-col items-center text-xl md:flex-row md:text-2xl">
        And all that speeded up with
        <GitHubIcon className="mt-4 aspect-square h-14 animate-bounce fill-[antiquewhite] md:mx-2 md:mt-0 md:h-24" />
        CI/CD workflow.
      </p>
    </main>
  );
}
