import Image from 'next/image';
export function TechCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="floating group cursor-pointer">
      <div
        className={`flex rounded-lg border bg-white p-2 shadow-lg transition duration-300 group-hover:rotate-2 group-hover:scale-105`}
      >
        <div className="flex h-60 w-60 flex-col items-center justify-center p-10">
          <Image
            src={`/${image}`}
            alt=""
            width={2000}
            height={2000}
            className="object-cover"
          ></Image>
          {/* <h3 className="ml-2 text-sm font-medium">{title}</h3> */}
        </div>
      </div>
    </div>
  );
}
