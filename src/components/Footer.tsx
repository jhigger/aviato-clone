/* eslint-disable @next/next/no-img-element */
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="mt-16 flex bg-neutral-800 text-white lg:mt-24 lg:justify-center">
      <div className="container mx-auto flex flex-col items-center p-4">
        <img
          src="https://placehold.co/100x100/?text=Icon"
          className="mt-[6.25rem] w-[6.25rem] lg:w-32"
          alt="Icon"
        />
        <h1 className="mt-8 text-2xl font-bold lg:text-4xl">
          Try Aviato today
        </h1>
        <p className="mt-1 text-sm text-stone-300 lg:text-lg">
          Adding transparency to private markets
        </p>
        <div className="mt-6 flex justify-evenly space-x-4 font-medium">
          <Button size="lg" className="bg-primary/50" asChild>
            <a href="#">Talk to sales</a>
          </Button>
          <Button
            size="lg"
            className="bg-white text-zinc-800 hover:bg-white/90"
            asChild
          >
            <a href="#">Request a trial</a>
          </Button>
        </div>
        <div className="mt-20 flex w-full items-center justify-between px-6 lg:px-20">
          <img
            src="https://placehold.co/200x100/?text=Logo"
            alt="Logo"
            className="w-[6.5rem] lg:w-40"
          />
          <div className="flex space-x-[1.38rem] lg:space-x-[2.38rem]">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 flex space-x-7 text-center text-sm font-medium lg:-mt-[3rem] lg:text-base">
          <a href="#">Terms of Services</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact</a>
        </div>
        <p className="mb-6 mt-10 text-xs">
          Aviato. All rights reserved. &copy; 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
