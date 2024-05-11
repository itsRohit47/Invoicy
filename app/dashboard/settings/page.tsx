import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
export default function SettingPage() {
  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-2xl`}>Settings</h1>
      </div>
      <br></br>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button className=" flex h-[48px] w-max items-center justify-center gap-2 bg-gray-50 p-3 text-sm font-medium hover:bg-red-100 hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
      </form>
    </div>
  );
}
