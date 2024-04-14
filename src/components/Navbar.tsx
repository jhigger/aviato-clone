/* eslint-disable @next/next/no-img-element */
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

const items = [
  {
    text: "API",
    href: "#",
  },
  {
    text: "Careers",
    href: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between px-6 py-4 font-medium">
      <Link href="/" className="mr-16">
        <img
          src="https://placehold.co/400x200/?text=Logo"
          alt="logo"
          className="h-10"
        />
      </Link>
      <div className="hidden w-full justify-between md:flex">
        <div className="flex items-center space-x-11">
          {items.map(({ text, href }) => (
            <a key={text} className="link" href={href}>
              {text}
            </a>
          ))}
        </div>
        <div className="space-x-4">
          <Button variant="outline" asChild>
            <a href="#">Sign In</a>
          </Button>
          <Button asChild>
            <a href="#">Request a free trial</a>
          </Button>
        </div>
      </div>

      <Sheet>
        <SheetTrigger asChild className="flex md:hidden">
          <Button size="icon" variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent
        
          side="top"
          className="flex flex-col items-center justify-center gap-4 pt-12"
        >
          {items.map(({ text, href }) => (
            <SheetTitle key={text} className="underline underline-offset-4">
              <a href={href}>{text}</a>
            </SheetTitle>
          ))}
          <div className="mt-8 flex w-full flex-col gap-4">
            <Button variant="outline" asChild>
              <a href="#">Sign In</a>
            </Button>
            <Button asChild>
              <a href="#">Request a free trial</a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
