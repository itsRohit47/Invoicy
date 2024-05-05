import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/outline';
export default function Landing2() {
  return (
    <div className="group m-5">
      <section className="overflow-hidden rounded-lg bg-gray-50 leading-8 text-gray-700 transition duration-300 group-hover:bg-gray-100">
        <div className="p-4 md:p-32">
          <div className="grid grid-cols-1 items-center gap-10 transition duration-300 group-hover:scale-105 md:grid-cols-4">
            <div className="col-span-2 flex flex-col gap-5">
              <h2 className="mb-4 font-myfont text-4xl font-bold tracking-widest">
                Effortless Invoicing
              </h2>
              <p className="mb-4 text-base max-w-lg">
                With Invoicy, managing your invoices has never been easier. Our
                intuitive interface allows you to create, edit, and send
                invoices with unparalleled ease and efficiency. Stay organized
                and in control of your finances like never before.
              </p>
              <ul className={`text-lg font-medium`}>
                <div className="flex items-center justify-start gap-3">
                  <CheckIcon className="h-6 w-6"></CheckIcon>
                  <div className="">Intuitive Interface</div>
                </div>
                <div className="flex items-center justify-start gap-3">
                  <CheckIcon className="h-6 w-6"></CheckIcon>
                  <div className="">Customization Options</div>
                </div>
                <div className="flex items-center justify-start gap-3">
                  <CheckIcon className="h-6 w-6"></CheckIcon>
                  <div className="">Effortless Invoicing</div>
                </div>
                <div className="flex items-center justify-start gap-3">
                  <CheckIcon className="h-6 w-6"></CheckIcon>
                  <div className="">Status Tracking</div>
                </div>
                <div className="flex items-center justify-start gap-3">
                  <CheckIcon className="h-6 w-6"></CheckIcon>
                  <div className="">Automated Reminders</div>
                </div>
                <div className="flex items-center justify-start gap-3">
                  <CheckIcon className="h-6 w-6"></CheckIcon>
                  <div className="">Mobile Accessibility</div>
                </div>
              </ul>
            </div>
            {/* Placeholder for image or demo */}
            <div className="col-span-2 -rotate-2 rounded-2xl border p-2 shadow-xl transition duration-300 group-hover:rotate-0 group-hover:scale-105 group-hover:shadow-2xl">
              <Image
                src="/land2.png"
                alt="Invoices Page Demo"
                width={2000}
                height={2000}
                className=" h-full w-full rounded-2xl border object-cover p-1"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
