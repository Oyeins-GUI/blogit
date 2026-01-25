"use client";

import { Button } from "@/components/ui/button";
import { inter } from "./fonts";
import { BlogitLogo } from "./blogit-logo";
import { links, NavLinks } from "./nav-links";
import Link from "next/link";
import {
   Bars3BottomRightIcon,
   ChevronRightIcon,
   XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <>
         <nav
            className={`${inter.className} antialiased flex items-center justify-between border-b border-b-gray-200 px-4 min-[1152px]:px-0 py-5`}
         >
            <Link href="/">
               <BlogitLogo />
            </Link>
            <div className="hidden md:flex items-center gap-12">
               <NavLinks />
               <Button>Get Started</Button>
            </div>
            <div className="md:hidden">
               {!isOpen && (
                  <Bars3BottomRightIcon
                     className="size-6"
                     onClick={() => setIsOpen(true)}
                  />
               )}
               {isOpen && (
                  <XMarkIcon
                     className="size-6"
                     onClick={() => setIsOpen(false)}
                  />
               )}
            </div>
         </nav>
         {isOpen && <MobileNav />}
      </>
   );
}

export function MobileNav() {
   const pathname = usePathname();

   return (
      <div className="absolute md:hidden w-full top-17.25 right-0 py-5 px-4 text-gray-600 shadow-lg">
         <div className="flex flex-col justify-between gap-3">
            {links.map(({ href, name }) => (
               <Link
                  key={name}
                  href={href}
                  className={clsx(
                     "hover:text-foreground hover:font-medium transition-all",
                     {
                        "text-foreground font-medium": pathname === href,
                     },
                  )}
               >
                  {name}
               </Link>
            ))}
            <Button className="w-full flex items-center justify-center mt-4 group">
               Get Started{" "}
               <ChevronRightIcon className="size-4 ml-2 group-hover:ml-4 transition-all text-white" />
            </Button>
         </div>
      </div>
   );
}
