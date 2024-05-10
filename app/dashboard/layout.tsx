'use client';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import NavLinks from '../ui/dashboard/nav-links';
import AcmeLogo from '../ui/acme-logo';
export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="m-4 rounded-lg bg-gray-50 py-4 px-2">
        <div className="md: flex gap-5 ">
          <button
            className="transition duration-300"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <XMarkIcon className="w-6 hover:scale-110" />
            ) : (
              <Bars3Icon className="w-6 transition duration-300 hover:scale-110" />
            )}
          </button>
          <AcmeLogo></AcmeLogo>
        </div>
        {isSidebarOpen && <NavLinks />}
      </div>
      <div className="p-4 transition duration-300 lg:p-10">{children}</div>
    </div>
  );
}
