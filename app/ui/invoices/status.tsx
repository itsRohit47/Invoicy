import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx('inline-flex items-center rounded-lg px-2 py-1 text-xs', {
        'border border-gray-500 bg-gray-50 text-gray-500': status === 'pending',
        'border border-green-500 bg-green-50 text-green-500': status === 'paid',
      })}
    >
      {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-green-500" />
        </>
      ) : null}
    </span>
  );
}
