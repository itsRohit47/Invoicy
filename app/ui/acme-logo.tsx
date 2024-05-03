import { DocumentCheckIcon } from '@heroicons/react/24/outline';

export default function AcmeLogo() {
  return (
    <div
      className={`flex max-w-xl flex-row items-center gap-2 leading-none text-gray-700`}
    >
      <DocumentCheckIcon className="h-6 w-6 " />
      <p className="text-xl font-bold">Invoicy</p>
    </div>
  );
}
