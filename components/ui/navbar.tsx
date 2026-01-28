"use client";

import { Bars3Icon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { NavLinks } from "./nav-links";
import { Sidebar } from "./side-bar";
import { BlogitLogo } from "./blogit-logo";

export function Navbar() {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <header
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
               ? "bg-background/80 backdrop-blur-lg border-b border-b-muted-foreground/30"
               : "bg-transparent"
         }`}
      >
         <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
            <BlogitLogo />

            <NavLinks />

            <div className="hidden items-center gap-3 lg:flex">
               <Button className="bg-transparent hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors">
                  Sign In
               </Button>
               <Button className="rounded-lg bg-primary text-primary-foreground">
                  Start Writing
               </Button>
            </div>

            <Button
               className="flex items-center hover:bg-primary hover:text-primary-foreground rounded-lg lg:hidden"
               onClick={() => setIsOpen(true)}
            >
               <Bars3Icon className="size-5 " />
            </Button>

            {isOpen && <Sidebar setIsOpen={setIsOpen} />}
         </nav>
      </header>
   );
}
