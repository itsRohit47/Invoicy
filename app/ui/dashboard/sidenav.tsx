import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';

export default function SideNav() {
  return (
    <div className="fixed top-0 flex h-screen flex-col bg-zinc-50 shadow-xl">
      <Link className="flex p-10" href="/">
        <div className="w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex flex-col">
        <NavLinks />
      </div>
    </div>
  );
}
