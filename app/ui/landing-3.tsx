import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/outline';
export default function Landing3() {
  return (
    <div className="group m-5 overflow-hidden rounded-lg ">
      <section className=" bg-zinc-900 leading-8 text-gray-100 transition duration-300 group-hover:scale-105 group-hover:bg-zinc-950">
        <div className="p-4 md:p-32">
          <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-4">
            <div className="col-span-2 rotate-2 rounded-2xl border shadow-xl transition duration-300 group-hover:rotate-0 group-hover:scale-105 group-hover:shadow-2xl">
              <Image
                src="/land2.png"
                alt="Invoices Page Demo"
                width={2000}
                height={2000}
                className="h-full w-full rounded-2xl object-cover p-2 "
              />
            </div>
            <div className="col-span-2 flex flex-col gap-5">
              <h2 className="mb-4 font-myfont text-4xl font-bold tracking-widest">
                Efficient Client Management
              </h2>
              <p className="mb-4 text-base">
                With Invoicy, managing your clients has never been easier. Our
                customers page provides a centralized hub to store and organize
                client information, streamlining your workflow and improving
                customer relationships.
              </p>
              <ul className={`text-lg font-medium`}>
                <div className="flex items-center justify-start gap-3">
                  <CheckIcon className="h-6 w-6"></CheckIcon>
                  <div className="">Client Management Made Easy</div>
                </div>
                <div className="flex items-center justify-start gap-3">
                  <CheckIcon className="h-6 w-6"></CheckIcon>
                  <div className="">Efficient Communication</div>
                </div>
                <div className="flex items-center justify-start gap-3">
                  <CheckIcon className="h-6 w-6"></CheckIcon>
                  <div className="">Personalized Interactions</div>
                </div>
                <div className="flex items-center justify-start gap-3">
                  <CheckIcon className="h-6 w-6"></CheckIcon>
                  <div className="">Improved Customer Relationships</div>
                </div>
                <div className="flex items-center justify-start gap-3">
                  <CheckIcon className="h-6 w-6"></CheckIcon>
                  <div className="">Integration with Invoicing</div>
                </div>
                <div className="flex items-center justify-start gap-3">
                  <CheckIcon className="h-6 w-6"></CheckIcon>
                  <div className="">Secure Data Management</div>
                </div>
              </ul>
            </div>
            {/* Placeholder for image or demo */}
          </div>
        </div>
      </section>
    </div>
  );
}
