"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
   { href: "/about", name: "About" },
   { href: "/support", name: "Support" },
   { href: "/blog", name: "Blog" },
];

export function NavLinks() {
   const pathname = usePathname();
   return (
      <div className="flex gap-6 text-sm text-gray-600">
         {links.map(({ href, name }) => (
            <Link
               key={name}
               href={href}
               className={clsx("", {
                  "text-foreground font-medium": pathname === href,
               })}
            >
               {name}
            </Link>
         ))}
      </div>
   );
}
