import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
import { AddCustomers } from '@/app/ui/customers/buttons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers | Invoicy Dashboard',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search Customers..." />
        <AddCustomers />
      </div>
      <Table query={query} currentPage={currentPage} />
    </div>
  );
}
