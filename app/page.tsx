import AcmeLogo from '@/app/ui/acme-logo';
import Link from 'next/link';

export default function Page() {
  return (
    <main className=" h-screen">
      <div className=" flex h-max items-center justify-between gap-10 border-b bg-zinc-50 p-6 text-sm text-gray-600">
        <div className="flex  items-center gap-10">
          <AcmeLogo />
          <div>Features</div>
          <div>Tech Stack</div>
          <div>Developers</div>
          <div>Other Projects</div>
        </div>
        <div>
          <div className="flex gap-4">
            <Link
              className="hover: rounded-lg border border-zinc-300 px-4 py-2 font-semibold text-zinc-700 transition duration-300 hover:bg-gray-900 hover:text-white"
              href="/login"
            >
              <div>Login</div>
            </Link>
            <Link
              className="hover: rounded-lg border border-zinc-300 bg-gray-900 px-4 py-2 font-semibold text-white transition duration-300 hover:text-white"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <div>Download</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-full bg-zinc-50 p-24">
        <div className="mx-auto flex flex-col  justify-center gap-6">
          <p className={`text-xl font-semibold text-zinc-800 md:text-3xl`}>
            Invoices done right.
          </p>
          <p className="text-zinc-600">
            Welcome to Invoicy, a full stack web application built using Next.js
            that aims to allow bussiness owners manage an invoices.
          </p>
        </div>
      </div>
    </main>
  );
}
