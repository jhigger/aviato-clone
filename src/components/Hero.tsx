/* eslint-disable @next/next/no-img-element */
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const items = [
  {
    src: "https://placehold.co/200x200?text=Image",
    text: "Funds",
  },
  {
    src: "https://placehold.co/200x200?text=Image",
    text: "Startups",
  },
  {
    src: "https://placehold.co/200x200?text=Image",
    text: "People",
  },
  {
    src: "https://placehold.co/200x200?text=Image",
    text: "Enterprises",
  },
  {
    src: "https://placehold.co/200x200?text=Image",
    text: "You",
  },
];

const Hero = () => {
  return (
    <>
      <div className="animate-fade-up animate-delay-[2000ms] animate-duration-500 mt-6">
        <a
          className="group flex h-8 items-center space-x-2 rounded-full border border-slate-300 p-0.5 px-0.5 text-xs font-medium sm:py-1 sm:pl-1.5 sm:pr-2 sm:text-sm"
          href="#"
        >
          <p className="bg-gray-200- flex h-full items-center rounded-full bg-gradient-to-r from-red-300 via-green-200 to-violet-300 px-2">
            Introducing our new enrichment API
          </p>
          <p className="hidden sm:inline">Learn More</p>
          <p className="hidden transition-all group-hover:ml-[14px] sm:inline">
            <ArrowRight size={12} />
          </p>
        </a>
      </div>

      <h1 className="animate-fade-up animate-duration-1000 animate-ease-out mt-6 w-72 text-center text-4xl font-semibold text-primary sm:w-[30rem] lg:w-[50rem] lg:text-6xl">
        The ultimate data engine <span className="sm:hidden">for</span>
        <div className="relative mt-1 flex h-[1.2em] justify-center overflow-hidden">
          <span className="animate-scrolling-header animate-delay-[2000ms] absolute top-0 space-y-1 lg:space-y-4">
            {items.map(({ src, text }) => (
              <div
                key={text}
                className="flex items-center justify-center sm:space-x-2 lg:space-x-3"
              >
                <span className="hidden sm:inline">for</span>
                <img
                  src={src}
                  className="mr-2 w-9 rounded-full sm:mr-0 lg:w-14"
                  alt={text}
                />
                <span>{text}</span>
              </div>
            ))}
          </span>
        </div>
      </h1>

      <div className="flex flex-col items-center">
        <div className="animate-fade-up animate-delay-[1100ms] animate-duration-1000">
          <p className="mt-6 w-72 text-center text-[0.875rem] font-medium text-zinc-800 sm:w-[30rem] md:w-[30rem] md:text-sm lg:w-[35rem] lg:text-base">
            Aviato turns data into deals by delivering high-quality people and
            company intelligence to your fingertips
          </p>
        </div>
        <div className="animate-fade-up animate-delay-[1300ms] animate-duration-1000">
          <div className="mt-6 space-x-4 font-medium">
            <Button size="lg" asChild>
              <a href="#"> Request a trial</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#">Talk to sales</a>
            </Button>
          </div>
        </div>
        <div className="animate-fade-up animate-delay-[1500ms] animate-duration-1000 relative">
          <div className="mx-[4%] md:mx-[6%]">
            <img
              src="https://placehold.co/1100x700?text=Image"
              alt="Demo"
              className="mt-16 w-full max-w-[73rem] rounded-xl border border-slate-200 drop-shadow-sm sm:rounded-xl"
            />
            <img
              src="https://placehold.co/600x300?text=Image"
              alt="Signal"
              className="absolute right-0 top-36 z-10 hidden h-64 rounded-xl shadow-xl md:block"
            />
            <img
              src="https://placehold.co/300x300?text=Image"
              alt="Vesting schedule UI"
              className="absolute bottom-[30%] left-0 z-10 hidden h-64 rounded-xl shadow-xl md:block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
