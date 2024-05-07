import { TechCard } from './tech-card';

export default function TechStack() {
  return (
    <div className="techcards m-5 flex flex-col gap-5 rounded-lg border bg-zinc-50 p-24 text-center text-gray-900">
      <div className="font-myfont text-4xl font-bold">
        Tech Stack for Invoicy
      </div>
      <div className="mx-auto mb-10 max-w-4xl text-base text-gray-600">
        Explore the technology behind Invoicy with our curated selection of
        cutting-edge tools and frameworks. From Next.js for powerful front-end
        development to TypeScript for robust, type-safe code, our tech stack is
        tailored to deliver a seamless user experience. Dive into Tailwind CSS
        for streamlined styling, and rely on PostScript for efficient backend
        processing. Powered by Vercel and GitHub, our infrastructure ensures
        reliability and scalability. Discover our tech stack below.
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10">
        <TechCard title="next" image="next.png"></TechCard>
        <TechCard title="next" image="ts.png"></TechCard>{' '}
        <TechCard title="next" image="tailwind.png"></TechCard>{' '}
        <TechCard title="next" image="ps.png"></TechCard>
        <TechCard title="next" image="vercel-logo.jpeg"></TechCard>
        <TechCard title="next" image="github-logo.png"></TechCard>
      </div>
    </div>
  );
}
