"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
   { href: "/", label: "Home" },
   { href: "/blog", label: "Blog" },
   { href: "/features", label: "Features" },
   { href: "/community", label: "Community" },
];

export function NavLinks() {
   const pathname = usePathname();

   return (
      <div className="hidden items-center gap-1 lg:flex">
         {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
               <Link
                  key={link.label}
                  href={link.href}
                  className={clsx(
                     "px-4 py-2 text-sm hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50",
                     isActive
                        ? "text-foreground bg-secondary/50"
                        : "text-muted-foreground",
                  )}
               >
                  {link.label}
               </Link>
            );
         })}
      </div>
   );
}

export function MobileNavLinks() {
   const pathname = usePathname();

   return (
      <div className="flex flex-col gap-1">
         {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
               <Link
                  key={link.label}
                  href={link.href}
                  className={clsx(
                     "px-4 py-3 text-base rounded-lg transition-colors hover:bg-secondary/80",
                     isActive
                        ? "text-foreground bg-secondary/6"
                        : "text-muted-foreground hover:text-foreground",
                  )}
               >
                  {link.label}
               </Link>
            );
         })}
      </div>
   );
}
