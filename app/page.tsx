import AcmeLogo from '@/app/ui/acme-logo';
import Link from 'next/link';
import Image from 'next/image';
import Landing2 from './ui/landing-2';
import Landing3 from './ui/landing-3';
import TechStack from './ui/tech-stack';

export default function Page() {
  return (
    <main className="h-max">
      {/* navbar */}
      <div className="m-5 flex h-max items-center justify-between gap-10 rounded-2xl bg-zinc-50 p-4 text-sm text-gray-600 lg:p-6">
        <AcmeLogo />
        <Link
          className="hover: rounded-lg border border-zinc-300 bg-blue-500 px-4 py-2 font-semibold text-zinc-100 transition duration-300 hover:scale-105"
          href="/login"
        >
          <div>Login</div>
        </Link>
      </div>
      {/* hero */}
      <div className="m-5 h-full rounded-lg bg-zinc-50 py-10 px-4 text-center leading-8 lg:p-24">
        <div className="mx-auto  flex flex-col items-center justify-center gap-8">
          <div className="rounded-full border border-blue-500 bg-blue-50 px-5 py-1 text-sm md:text-base font-medium text-blue-500">
            Introducing Invoicy
          </div>
          <div
            className={` font-myfont text-3xl font-bold tracking-widest text-zinc-800 lg:text-7xl`}
          >
            Invoices made easy
          </div>
          <div className="lg:max-w-2xl text-sm text-gray-600 md:text-base lg:text-lg">
            Invoicy gives you a world class user interface to manage your
            invoices with unparalleled ease and efficiency. Don&apos;t settle
            for mediocre invoicing solutions. With Invoicy, you&apos;re in
            control of your finances like never before. Experience the
            difference today.
          </div>
          <div>
            <div className="flex gap-4 text-sm md:text-base lg:text-lg">
              <Link
                className="hover: rounded-lg border border-zinc-300 bg-gray-900 px-4 py-2 font-semibold text-white transition duration-300 hover:scale-105"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
              >
                <div>Sign Up</div>
              </Link>
              <Link
                className="hover: rounded-lg border border-zinc-300 px-4 py-2 font-semibold text-zinc-700 transition duration-300 hover:scale-105"
                href="/login"
              >
                {' '}
                <div>Contact Sales</div>
              </Link>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border p-2 shadow-2xl">
            <Image
              src="/hero.png"
              alt=""
              width={2000}
              height={2000}
              className="rounded-2xl border p-2"
            ></Image>
          </div>
        </div>
      </div>
      <Landing2></Landing2>
      <Landing3></Landing3>
      <TechStack></TechStack>
    </main>
  );
}
